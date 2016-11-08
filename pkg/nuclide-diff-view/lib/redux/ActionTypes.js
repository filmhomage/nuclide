'use strict';
'use babel';

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

const ADD_REPOSITORY = exports.ADD_REPOSITORY = 'ADD_REPOSITORY';
const ADD_UI_PROVIDER = exports.ADD_UI_PROVIDER = 'ADD_UI_PROVIDER';
const CLOSE_VIEW = exports.CLOSE_VIEW = 'CLOSE_VIEW';
const COMMIT = exports.COMMIT = 'COMMIT';
const DIFF_FILE = exports.DIFF_FILE = 'DIFF_FILE';
const OPEN_VIEW = exports.OPEN_VIEW = 'OPEN_VIEW';
const PUBLISH_DIFF = exports.PUBLISH_DIFF = 'PUBLISH_DIFF';
const REMOVE_REPOSITORY = exports.REMOVE_REPOSITORY = 'REMOVE_REPOSITORY';
const REMOVE_UI_PROVIDER = exports.REMOVE_UI_PROVIDER = 'REMOVE_UI_PROVIDER';
const SET_COMMIT_MODE = exports.SET_COMMIT_MODE = 'SET_COMMIT_MODE';
const SET_COMPARE_ID = exports.SET_COMPARE_ID = 'SET_COMPARE_ID';
const SET_CWD_API = exports.SET_CWD_API = 'SET_CWD_API';
const SET_SHOULD_REBASE_ON_AMEND = exports.SET_SHOULD_REBASE_ON_AMEND = 'SET_SHOULD_REBASE_ON_AMEND';
const SET_VIEW_MODE = exports.SET_VIEW_MODE = 'SET_VIEW_MODE';
const UPDATE_ACTIVE_NAVIGATION_SECTION = exports.UPDATE_ACTIVE_NAVIGATION_SECTION = 'UPDATE_ACTIVE_NAVIGATION_SECTION';
const UPDATE_ACTIVE_REPOSITORY = exports.UPDATE_ACTIVE_REPOSITORY = 'UPDATE_ACTIVE_REPOSITORY';
const UPDATE_COMMIT_STATE = exports.UPDATE_COMMIT_STATE = 'UPDATE_COMMIT_STATE';
const UPDATE_DIFF_EDITORS = exports.UPDATE_DIFF_EDITORS = 'UPDATE_DIFF_EDITORS';
const UPDATE_DIFF_EDITORS_VISIBILITY = exports.UPDATE_DIFF_EDITORS_VISIBILITY = 'UPDATE_DIFF_EDITORS_VISIBILITY';
const UPDATE_DIFF_NAVIGATOR_VISIBILITY = exports.UPDATE_DIFF_NAVIGATOR_VISIBILITY = 'UPDATE_DIFF_NAVIGATOR_VISIBILITY';
const UPDATE_DIRTY_FILES = exports.UPDATE_DIRTY_FILES = 'UPDATE_DIRTY_FILES';
const UPDATE_FILE_DIFF = exports.UPDATE_FILE_DIFF = 'UPDATE_FILE_DIFF';
const UPDATE_FILE_UI_ELEMENTS = exports.UPDATE_FILE_UI_ELEMENTS = 'UPDATE_FILE_UI_ELEMENTS';
const UPDATE_HEAD_TO_FORKBASE_REVISIONS = exports.UPDATE_HEAD_TO_FORKBASE_REVISIONS = 'UPDATE_HEAD_TO_FORKBASE_REVISIONS';
const UPDATE_LOADING_FILE_DIFF = exports.UPDATE_LOADING_FILE_DIFF = 'UPDATE_LOADING_FILE_DIFF';
const UPDATE_LOADING_SELECTED_FILES = exports.UPDATE_LOADING_SELECTED_FILES = 'UPDATE_LOADING_SELECTED_FILES';
const UPDATE_PUBLISH_STATE = exports.UPDATE_PUBLISH_STATE = 'UPDATE_PUBLISH_STATE';
const UPDATE_SELECTED_FILES = exports.UPDATE_SELECTED_FILES = 'UPDATE_SELECTED_FILES';