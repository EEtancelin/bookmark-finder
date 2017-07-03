// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const flatBookmarkTreeNodes = function(treeNodes) {
  let flatNodes = {};
  treeNodes.forEach(function (treeNode) {
      flatNodes[treeNode.id] = treeNode
      if (treeNode.children) {
        flatNodes = Object.assign(flatNodes, flatBookmarkTreeNodes(treeNode.children))
      }
   });
   return(flatNodes);
};

const extractTagRec = function(treeNodeObjects, treeNodeId) {
  let treeNode = treeNodeObjects[treeNodeId];
  let tags = [];
  if (treeNode.parentId) {
    tags = [treeNode.title];
    tags = tags.concat(extractTagRec(treeNodeObjects, treeNode.parentId));
  }
  return tags;
}
 const extractTag = function(treeNodeObjects, treeNodeId) {
   let treeNode = treeNodeObjects[treeNodeId];
   let tags = [];
   if (treeNode.parentId) {
     tags = extractTagRec(treeNodeObjects, treeNode.parentId)
   }
   return tags;
 }

 const addTagsToNodes = function(treeNodeObjects) {
   for (var key in treeNodeObjects) {
     if (treeNodeObjects.hasOwnProperty(key)) {
       treeNodeObjects[key]['tag'] = extractTag(treeNodeObjects, key)
     }
   }
   return treeNodeObjects;
 }


const bookmarkTreeNodes = chrome.bookmarks.getTree(
  function(bookmarkTreeNodes) {
    let nodes = flatBookmarkTreeNodes(bookmarkTreeNodes);
    console.log(nodes);
    nodeWithTags = addTagsToNodes(nodes)
    console.log(nodeWithTags);
    var object = require('lodash/fp/object');
    console.log(object);
  }
);

const filterSmartNodes = function (treeNodeObjects) {
  return treeNodeObjects.filter( function(node) {node.children});
}

// Detect form submit
$(function() {
  $( "#target" ).submit(function( event ) {
    event.preventDefault();
   var $inputs = $('.input');
   var values = {};
    $inputs.each(function() {
      values[this.name] = $(this).val();
    });
    postBookmark(values);

  });
});
