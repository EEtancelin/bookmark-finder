// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const flatBookmarkTreeNodes = function(treeNodes) {
  let flatNodes = {};
  treeNodes.forEach(function (treeNode) {
      if (treeNode.children) {
        flatNodes = Object.assign(flatNodes, flatBookmarkTreeNodes(treeNode.children))
      } else {
        let node = {}
        node[treeNode.id] = treeNode
        flatNodes = Object.assign(flatNodes, node);
      }
   });
   return(flatNodes);
};
const flatSmartTreeNodes = function(treeNodes) {
  let flatNodes = {};
  treeNodes.forEach(function (treeNode) {
      if (treeNode.children) {
        flatNodes = Object.assign(flatNodes, flatSmartTreeNodes(treeNode.children));
        delete treeNode.children
        let node = {}
        node[treeNode.id] = treeNode
        flatNodes = Object.assign(flatNodes, node);
      }
   });
   return(flatNodes);
};

const fct = flatBookmarkTreeNodes;
const bookmarkTreeNodes = chrome.bookmarks.getTree(
  function(bookmarkTreeNodes) {
    console.log("dumpNodes");
    console.log(flatBookmarkTreeNodes(bookmarkTreeNodes));
    console.log("dumpNodes");
    console.log(flatSmartTreeNodes(bookmarkTreeNodes));
  }
);

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
