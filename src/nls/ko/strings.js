/*
 * GNU AGPL-3.0 License
 *
 * Modified Work Copyright (c) 2021 - present core.ai . All rights reserved.
 * Original work Copyright (c) 2013 - 2021 Adobe Systems Incorporated. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 * for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://opensource.org/licenses/AGPL-3.0.
 *
 */

define({

    /**
     * Errors
     */

    // General file io error strings
    "GENERIC_ERROR": "(에러 {0})",
    "NOT_FOUND_ERR": "파일을 찾을 수 없습니다.",
    "NOT_READABLE_ERR": "파일을 읽을 수 없습니다.",
    "EXCEEDS_MAX_FILE_SIZE": "{0} MB보다 큰 파일은 {APP_NAME}에서 열 수 없습니다.",
    "NO_MODIFICATION_ALLOWED_ERR": "대상 디렉토리를 변경할 수 없습니다.",
    "NO_MODIFICATION_ALLOWED_ERR_FILE": "파일을 수정할 수 있는 권한이 없습니다.",
    "CONTENTS_MODIFIED_ERR": "{APP_NAME} 외부에서 파일이 변경되었습니다.",
    "UNSUPPORTED_ENCODING_ERR": "{APP_NAME}는 현재 UTF-8 인코딩된 파일만 지원합니다.",
    "FILE_EXISTS_ERR": "파일 또는 디렉토리가 이미 있습니다.",
    "FILE": "파일",
    "FILE_TITLE": "파일",
    "DIRECTORY": "디렉토리",
    "DIRECTORY_TITLE": "디렉토리",
    "DIRECTORY_NAMES_LEDE": "디렉토리 이름",
    "FILENAMES_LEDE": "파일 이름",
    "FILENAME": "파일 이름",
    "DIRECTORY_NAME": "디렉토리 이름",

    // Project error strings
    "ERROR_LOADING_PROJECT": "프로젝트 로드에 실패했습니다",
    "OPEN_DIALOG_ERROR": "'파일 열기' 대화 상자를 표시 하는 중 에러가 발생했습니다. (에러 {0})",
    "REQUEST_NATIVE_FILE_SYSTEM_ERROR": "디렉토리 <span class='dialog-filename'>{0}</span>을 읽는 중 에러가 발생했습니다. (에러 {1})",
    "READ_DIRECTORY_ENTRIES_ERROR": "디렉토리 <span class='dialog-filename'>{0}</span>의 내용을 읽는 중에 에러가 발생했습니다. (에러 {1})",

    // File open/save error string
    "ERROR_OPENING_FILE_TITLE": "파일을 열던 중에 에러가 발생했습니다.",
    "ERROR_OPENING_FILE": "파일 <span class='dialog-filename'>{0}</span>을 열던 중에 에러가 발생했습니다. {1}",
    "ERROR_OPENING_FILES": "다음의 파일을 열던 중에 에러가 발생했습니다 :",
    "ERROR_RELOADING_FILE_TITLE": "디스크에서 변경 내용을 다시 로드 하던 중에 에러가 발생했습니다.",
    "ERROR_RELOADING_FILE": "파일 <span class='dialog-filename'>{0}</span>을 다시 읽어 오던 중에 에러가 발생했습니다. {1}",
    "ERROR_SAVING_FILE_TITLE": "파일을 저장하는 동안 에러가 발생했습니다.",
    "ERROR_SAVING_FILE": "파일 <span class='dialog-filename'>{0}</span>을 저장하던 중에 에러가 발생했습니다. {1}",
    "ERROR_RENAMING_FILE_TITLE": "파일의 이름을 변경하던 중에 에러가 발생했습니다.",
    "ERROR_RENAMING_FILE": "파일 <span class='dialog-filename'>{0}</span>의 이름을 변경하던 중에 에러가 발생했습니다. {1}",
    "ERROR_DELETING_FILE_TITLE": "파일 삭제 에러",
    "ERROR_DELETING_FILE": "파일을 삭제할 때 에러가 발생했습니다 <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "잘못된 {0}이름",
    "INVALID_FILENAME_MESSAGE": "파일 이름에는 다음 문자를 포함 할 수 없습니다: {0} 또는 시스템의 모든 예약어",
    "ENTRY_WITH_SAME_NAME_EXISTS": "<span class='dialog-filename'>{0}</span> 이름을 가진 파일 또는 디렉토리가 이미 존재합니다.",
    "ERROR_CREATING_FILE_TITLE": "{0}를 만들던 중에 에러가 발생했습니다",
    "ERROR_CREATING_FILE": "{0} <span class='dialog-filename'>{1}</span>를 만들던 중에 에러가 발생했습니다.{2}",
    "ERROR_MIXED_DRAGDROP": "다른 파일을 여는 도중에는 폴더를 열 수 없습니다.",

    // User key map error strings
    "ERROR_KEYMAP_TITLE": "사용자 키맵 파일을 읽는 중 에러가 발생했습니다",
    "ERROR_KEYMAP_CORRUPT": "키맵 파일의 JSON 형식이 올바르지 않습니다. 형식을 올바르게 수정할 수 있도록 파일이 열릴 것입니다",
    "ERROR_LOADING_KEYMAP": "키맵 파일이 올바르지 않은 UTF-8로 인코딩되어 있어 읽을 수 없습니다",
    "ERROR_RESTRICTED_COMMANDS": "다음 명령에 대한 단축키를 다시 설정할 수 없습니다: {0}",
    "ERROR_RESTRICTED_SHORTCUTS": "다음 단축키를 다시 설정할 수 없습니다: {0}",
    "ERROR_MULTIPLE_SHORTCUTS": "다음 명령에 대해 단축키를 여러 개 할당하려 했습니다: {0}",
    "ERROR_DUPLICATE_SHORTCUTS": "다음 단축키에 대해 여러 개의 명령어가 설정되어 있습니다: {0}",
    "ERROR_INVALID_SHORTCUTS": "다음 단축키는 올바르지 않습니다: {0}",
    "ERROR_NONEXISTENT_COMMANDS": "존재하지 안는 명령어애 단축키를 설정했습니다: {0}",

    // Application preferences corrupt error strings
    "ERROR_PREFS_CORRUPT_TITLE": "환경설정을 읽는 중 에러가 발생했습니다",
    "ERROR_PREFS_CORRUPT": "환경설정 파일의 JSON 형식이 올바르지 않습니다. 형식을 올바르게 수정할 수 있도록 파일이 열릴 것입니다. 수정한 내용을 반영하려면 {APP_NAME}를 재시작해야 합니다.",
    "ERROR_PROJ_PREFS_CORRUPT": "프로젝트 환경설정 파일의 JSON 형식이 올바르지 않습니다. 형식을 올바르게 수정할 수 있도록 파일이 열릴 것입니다. 변경 사항을 적용하려면 프로젝트를 다시 로드해야 합니다.",

    // Application error strings
    "ERROR_IN_BROWSER_TITLE": "{APP_NAME}는 아직 브라우저에서 실행되지 않습니다.",
    "ERROR_IN_BROWSER": "{APP_NAME}는 HTML로 구축되어 있지만 데스크톱 응용 프로그램으로 실행하여 로컬 파일을 편집 할 수 있습니다. {APP_NAME}를 실행하기 위해 <b>github.com / adobe / brackets-shell</b> 저장소 응용 프로그램 셸을 사용하십시오.",

    // ProjectManager max files error string
    "ERROR_MAX_FILES_TITLE": "파일을 인덱스 하던 중에 에러가 발생했습니다.",
    "ERROR_MAX_FILES": "인덱싱 할 수 있는 파일의 최대 수에 도달했습니다. 인덱스에서 파일 검색 기능이 제대로 작동하지 않을 수 있습니다.",

    // Live Development error strings
    "ERROR_LAUNCHING_BROWSER_TITLE": "브라우저 시작 에러",
    "ERROR_CANT_FIND_CHROME": "Google Chrome 브라우저를 찾을 수 없습니다. 설치되어 있는지 확인하십시오.",
    "ERROR_LAUNCHING_BROWSER": "브라우저를 시작하던 중에 에러가 발생했습니다. (에러 {0})",

    "LIVE_DEVELOPMENT_ERROR_TITLE": "실시간 미리보기 에러",
    "LIVE_DEVELOPMENT_RELAUNCH_TITLE": "브라우저에 연결합니다",
    "LIVE_DEVELOPMENT_ERROR_MESSAGE": "실시간 미리보기에 연결하려면 원격 디버깅을 사용하여 Chrome을 다시 시작해야 합니다. <br /> Chrome을 다시 시작하고 원격 디버깅을 사용하시겠습니까?",
    "LIVE_DEV_LOADING_ERROR_MESSAGE": "실시간 미리보기 페이지를 읽을 수 없습니다.",
    "LIVE_DEV_NEED_HTML_MESSAGE": "실시간 미리보기를 시작하려면 HTML 파일을 열거나 index.html 파일이 프로젝트에 포함되어 있는지 확인하십시오.",
    "LIVE_DEV_NEED_BASEURL_MESSAGE": "서버 측 파일 실시간 미리보기를 시작하려면 이 프로젝트의 기본 URL을 지정해야 합니다.",
    "LIVE_DEV_SERVER_NOT_READY_MESSAGE": "실시간 미리보기에 사용되는 HTTP 서버를 시작할 때 에러가 발생했습니다. 잠시 후에 다시 시도하세요.",
    "LIVE_DEVELOPMENT_INFO_TITLE": "실시간 미리보기에 오신 것을 환영합니다",
    "LIVE_DEVELOPMENT_INFO_MESSAGE": "{APP_NAME}가 실시간 미리보기를 통해 브라우저에 연결됐습니다. HTML 파일이 수정되면 브라우저에서 미리보기가 즉시 업데이트됩니다. <br />현재 사용 중인 {APP_NAME}의 초기 버전에서는 <strong>Google Chrome</strong> 에서만 실시간 미리보기를 지원하며, <strong>CSS 또는 HTML 파일</strong>을 편집할 때만 실시간으로 업데이트됩니다. 자바스크립트 파일에 대한 변경 사항은 저장할 때 자동으로 다시 로드됩니다. (이 메시지는 한 번만 표시됩니다)",
    "LIVE_DEVELOPMENT_TROUBLESHOOTING": "자세한 내용은 <a href='{0}' title='{0}'> Live Development 연결 오류 문제 해결 </a>를 참조하세요.",

    "LIVE_DEV_STATUS_TIP_NOT_CONNECTED": "실시간 미리보기",
    "LIVE_DEV_STATUS_TIP_PROGRESS1": "실시간 미리보기: 연결 중 \u2026",
    "LIVE_DEV_STATUS_TIP_PROGRESS2": "실시간 미리보기: 초기화 중\u2026",
    "LIVE_DEV_STATUS_TIP_CONNECTED": "실시간 미리보기가 연결되었습니다.",
    "LIVE_DEV_STATUS_TIP_OUT_OF_SYNC": "실시간 미리보기 (파일을 저장하고 업데이트)",
    "LIVE_DEV_STATUS_TIP_SYNC_ERROR": "실시간 프리 (구문 오류로 인해 업데이트되지 않습니다)",

    "LIVE_DEV_DETACHED_REPLACED_WITH_DEVTOOLS": "브라우저의 개발 도구가 열려 있기 때문에 실시간 미리보기가 취소되었습니다뷰.",
    "LIVE_DEV_DETACHED_TARGET_CLOSED": "브라우저에서 페이지가 닫혀 있으므로 실시간 미리보기가 취소되었습니다.",
    "LIVE_DEV_NAVIGATED_AWAY": "브라우저에서 현재 프로젝트에 포함되지 않은 페이지로 이동했기 때문에 실시간 미리보기가 취소되었습니다.",
    "LIVE_DEV_CLOSED_UNKNOWN_REASON": "알 수없는 원인 ({0})에 의해 실시간 미리보기가 취소되었습니다.",

    "SAVE_CLOSE_TITLE": "변경 사항 저장",
    "SAVE_CLOSE_MESSAGE": "문서 <span class='dialog-filename'>{0}</span> 변경 내용을 저장 하시겠습니까?",
    "SAVE_CLOSE_MULTI_MESSAGE": "다음 파일에 대한 변경 사항을 저장 하시겠습니까?",
    "EXT_MODIFIED_TITLE": "외부 변경 감지",
    "CONFIRM_DELETE_TITLE": "삭제 확인",
    "CONFIRM_FOLDER_DELETE": "<span class='dialog-filename'>{0}</span> 폴더를 삭제 하시겠습니까?",
    "FILE_DELETED_TITLE": "파일이 삭제되었습니다",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span>파일이 변경되었습니다.<br /><br />파일을 저장하여 이 변경 사항을 덮어씌우겠습니까?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span>파일에 저장되지 않은 변경 사항이 있습니다. <br /> 두 버전을 유지 하시겠습니까?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span>파일은 삭제되었지만 저장되지 않은 변경 사항이 있습니다. <br /> 변경을 유지 하시겠습니까?",

    // Generic dialog/button labels
    "DONE": "완료",
    "OK": "확인",
    "CANCEL": "취소",
    "DONT_SAVE": "저장하지 않음",
    "SAVE": "저장",
    "SAVE_AS": "다른 이름으로 저장\u2026",
    "SAVE_AND_OVERWRITE": "덮어쓰기",
    "DELETE": "삭제",
    "BUTTON_YES": "예",
    "BUTTON_NO": "아니오",

    // Find, Replace, Find in Files
    "FIND_MATCH_INDEX": "{1}개 중 {0}번째",
    "FIND_NO_RESULTS": "결과 없음",
    "FIND_QUERY_PLACEHOLDER": "검색할 내용\u2026",
    "REPLACE_PLACEHOLDER": "바꿀 내용\u2026",
    "BUTTON_REPLACE_ALL": "일괄 변경\u2026",
    "BUTTON_REPLACE_ALL_IN_FILES": "바꾸기\u2026",
    "BUTTON_REPLACE": "바꾸기",
    "BUTTON_NEXT": "\u25B6",
    "BUTTON_PREV": "\u25C0",
    "BUTTON_NEXT_HINT": "다음 항목으로 이동",
    "BUTTON_PREV_HINT": "이전 항목으로 이동",
    "BUTTON_CASESENSITIVE_HINT": "대소문자 구별",
    "BUTTON_REGEXP_HINT": "정규식",
    "REPLACE_WITHOUT_UNDO_WARNING_TITLE": "복원할 수 없는 바꾸기",
    "REPLACE_WITHOUT_UNDO_WARNING": "{0}개 이상의 파일을 수정해야 하므로, {APP_NAME}는 열지 않은 파일도 수정할 것입니다.<br />열지 않은 파일에서 바꾼 내용은 복원할 수 없습니다.",
    "BUTTON_REPLACE_WITHOUT_UNDO": "바꾸기",

    "OPEN_FILE": "파일 열기",
    "SAVE_FILE_AS": "다른 이름으로 저장",
    "CHOOSE_FOLDER": "폴더 선택",

    "RELEASE_NOTES": "릴리즈 노트",
    "NO_UPDATE_TITLE": "최신 버전입니다.",
    "NO_UPDATE_MESSAGE": "{APP_NAME} 최신 버전을 사용중입니다.",

    // Find and Replace
    "FIND_REPLACE_TITLE_LABEL": "바꾸기:",
    "FIND_REPLACE_TITLE_WITH": "\u2192",
    "FIND_TITLE_LABEL": "찾기:",
    "FIND_TITLE_SUMMARY": "&mdash; {3}에서 {1}개를 찾았습니다",

    // Find in Files
    "FIND_NUM_FILES": "{0}개 {1}",
    "FIND_IN_FILES_SCOPED": "<span class='dialog-filename'>{0}</span>의",
    "FIND_IN_FILES_NO_SCOPE": "프로젝트",
    "FIND_IN_FILES_ZERO_FILES": "검색 규칙이 {0}의 파일을 모두 대상에서 제외시켰습니다.",
    "FIND_IN_FILES_FILE": "파일",
    "FIND_IN_FILES_FILES": "파일",
    "FIND_IN_FILES_MATCH": "을 찾았습니다",
    "FIND_IN_FILES_MATCHES": "을 찾았습니다",
    "FIND_IN_FILES_MORE_THAN": "이상",
    "FIND_IN_FILES_PAGING": "{0}&mdash;{1}",
    "FIND_IN_FILES_FILE_PATH": "<span class='dialog-filename'>{0}</span> {2} <span class='dialog-path'>{1}</span>",
    "FIND_IN_FILES_EXPAND_COLLAPSE": "Ctrl/Cmd를 클릭하면 전부 펼치거나 접습니다",
    "FIND_IN_FILES_INDEXING": "빠른 검색을 위한 색인 중\u2026",
    "REPLACE_IN_FILES_ERRORS_TITLE": "바꾸기 에러",
    "REPLACE_IN_FILES_ERRORS": "다음 파일은 검색 후에 변경되었거나 저장할 수 없는 파일이므로 수정할 수 없습니다.",

    "ERROR_FETCHING_UPDATE_INFO_TITLE": "업데이트 정보를 검색하는 중 오류가 발생했습니다.",
    "ERROR_FETCHING_UPDATE_INFO_MSG": "서버에서 최신 업데이트를 검색하는 중 오류가 발생했습니다. 인터넷 연결을 확인하고 다시 시도하세요.",

    // File exclusion filters
    "NEW_FILE_FILTER": "검색 제외 규칙\u2026",
    "CLEAR_FILE_FILTER": "제외할 파일 없음",
    "NO_FILE_FILTER": "제외할 파일 없음",
    "EXCLUDE_FILE_FILTER": "{0} 제외",
    "EDIT_FILE_FILTER": "수정\u2026",
    "FILE_FILTER_DIALOG": "검색 제외 규칙 편집",
    "FILE_FILTER_INSTRUCTIONS": "다음에 입력한 문자열에 전체나 일부 혹은 <a href='{0}' title='{0}'>와일드 카드</a>에 일치하는 파일과 폴더를 검색에서 제외합니다. 각 문자열은 한 줄에 하나씩 입력하세요.",
    "FILTER_NAME_PLACEHOLDER": "이 제외 규칙의 이름 (생략가능)",
    "FILE_FILTER_CLIPPED_SUFFIX": "and {0} more",
    "FILTER_COUNTING_FILES": "파일 계산 중\u2026",
    "FILTER_FILE_COUNT": "{2}의 전체 {1}개 파일/폴더 중 {0}개 제외",
    "FILTER_FILE_COUNT_ALL": "전체 {1}개 파일/폴더 중 {0}개 제외",

    // Quick Edit
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "현재 커서 위치에서는 빠른 편집을 사용할 수 없습니다",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS 빠른 편집: 커서를 클래스 이름 위에 두세요",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS 빠른 편집: 완료되지 않은 class 속성입니다",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS 빠른 편집: 완료되지 않은 id 속성입니다",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS 빠른 편집: 커서를 태그, 클래스 또는 아이디에 두세요",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS 타이밍 함수 빠른 편집:  문법이 올바르지 않습니다",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS 빠른 편집: 커서를 함수 이름에 두세요",

    // Quick Docs
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "현재 커서 위치에서는 빠른 문서보기를 사용할 수 없습니다",

    /**
     * ProjectManager
     */
    "PROJECT_LOADING": "프로젝트 여는 중\u2026",
    "UNTITLED": "제목 없음",
    "WORKING_FILES": "현재 파일",

    /**
     * MainViewManager
     */
    "TOP": "위",
    "BOTTOM": "아래",
    "LEFT": "왼쪽",
    "RIGHT": "오른쪽",

    "CMD_SPLITVIEW_NONE": "나누지 않음",
    "CMD_SPLITVIEW_VERTICAL": "왼쪽/오른쪽으로 분할",
    "CMD_SPLITVIEW_HORIZONTAL": "위/아래로 분할",
    "SPLITVIEW_MENU_TOOLTIP": "에디터를 왼쪽/오른쪽 또는 위/아래로 분할합니다",
    "GEAR_MENU_TOOLTIP": "Configure Working Set",

    "SPLITVIEW_INFO_TITLE": "이미 열려있는 파일",
    "SPLITVIEW_MULTIPANE_WARNING": "이 파일은 이미 다른 패널에서 열려있습니다. 이름이 같은 파일을 여러 패널에서 여는 기능은 곧 지원될 예정입니다. 그 전에는 이미 열려있던 파일은 해당 패널에서 보게될 것입니다.<br /><br />(이 메시지는 한 번만 나타납니다.)",

    /**
     * Keyboard modifier names
     */
    "KEYBOARD_CTRL": "Ctrl",
    "KEYBOARD_SHIFT": "Shift",
    "KEYBOARD_SPACE": "Space",
    "KEYBOARD_PAGE_UP": "Page Up",
    "KEYBOARD_PAGE_DOWN": "Page Down",
    "KEYBOARD_HOME": "Home",
    "KEYBOARD_END": "End",
    "KEYBOARD_INSERT": "Insert",
    "KEYBOARD_DELETE": "Delete",

    /**
     * StatusBar strings
     */
    "STATUSBAR_CURSOR_POSITION": "행 {0}, 열 {1}",
    "STATUSBAR_SELECTION_CH_SINGULAR": " \u2014 {0} 열을 선택",
    "STATUSBAR_SELECTION_CH_PLURAL": " \u2014 {0} 열을 선택",
    "STATUSBAR_SELECTION_LINE_SINGULAR": " \u2014 {0} 행을 선택",
    "STATUSBAR_SELECTION_LINE_PLURAL": " \u2014 {0} 행을 선택",
    "STATUSBAR_SELECTION_MULTIPLE": " \u2014 {0}개 선택영역",
    "STATUSBAR_INDENT_TOOLTIP_SPACES": "들여쓰기를 공백으로 변환",
    "STATUSBAR_INDENT_TOOLTIP_TABS": "들여쓰기를 탭으로 변환",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_SPACES": "들여쓰기에 사용할 공백 갯수 변경",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_TABS": "탭 너비 변경",
    "STATUSBAR_SPACES": "스페이스:",
    "STATUSBAR_TAB_SIZE": "탭 폭:",
    "STATUSBAR_LINE_COUNT_SINGULAR": "\u2014 {0} 행",
    "STATUSBAR_LINE_COUNT_PLURAL": "\u2014 {0} 행",
    "STATUSBAR_USER_EXTENSIONS_DISABLED": "확장 기능 사용 불가",
    "STATUSBAR_INSERT": "INS",
    "STATUSBAR_OVERWRITE": "OVR",
    "STATUSBAR_INSOVR_TOOLTIP": "클릭하면 커서를 삽입(INS)또는 덮어쓰기(OVR) 모드로 전환합니다",
    "STATUSBAR_LANG_TOOLTIP": "파일 종류를 변경하려면 클릭하세요",
    "STATUSBAR_CODE_INSPECTION_TOOLTIP": "{0}. 클릭하면 기록 패널을 토글합니다.",
    "STATUSBAR_DEFAULT_LANG": "(기본값)",
    "STATUSBAR_SET_DEFAULT_LANG": ".{0} 파일에 대한 기본값으로 설정",

    // CodeInspection: errors/warnings
    "ERRORS_PANEL_TITLE_MULTIPLE": "{0}개의 에러",
    "SINGLE_ERROR": "1개의 {0} 에러",
    "MULTIPLE_ERRORS": "{1}개의 {0} 에러",
    "NO_ERRORS": "{0} 에러가 없습니다 - 훌륭합니다!",
    "NO_ERRORS_MULTIPLE_PROVIDER": "에러가 없습니다 - 훌륭합니다!",
    "LINT_DISABLED": "Lint 검사를 사용할 수 없습니다.",
    "NO_LINT_AVAILABLE": "{0} 사용할 수 있는 Lint 검사기가 없습니다.",
    "NOTHING_TO_LINT": "Lint 검사기로 확인할 파일이 없습니다.",
    "LINTER_TIMED_OUT": "{0} 검사기가 {1}ms 대기 후 타임아웃 되었습니다",
    "LINTER_FAILED": "{0} 검사기가 에러때문에 종료되었습니다: {1}",

    /**
     * Command Name Constants
     */

    // File menu commands
    "FILE_MENU": "파일",
    "CMD_FILE_NEW_UNTITLED": "새 파일",
    "CMD_FILE_NEW": "파일 만들기",
    "CMD_FILE_NEW_FOLDER": "폴더 만들기",
    "CMD_FILE_OPEN": "파일 열기\u2026",
    "CMD_ADD_TO_WORKING_SET": "작업세트에 추가",
    "CMD_OPEN_DROPPED_FILES": "드롭한 파일 열기",
    "CMD_OPEN_FOLDER": "폴더 열기\u2026",
    "CMD_FILE_CLOSE": "닫기",
    "CMD_FILE_CLOSE_ALL": "모두 닫기",
    "CMD_FILE_CLOSE_LIST": "목록 닫기",
    "CMD_FILE_CLOSE_OTHERS": "다른 파일 닫기",
    "CMD_FILE_CLOSE_ABOVE": "위의 목록 닫기",
    "CMD_FILE_CLOSE_BELOW": "아래 목록 닫기",
    "CMD_FILE_SAVE": "저장",
    "CMD_FILE_SAVE_ALL": "모두 저장",
    "CMD_FILE_SAVE_AS": "다른 이름으로 저장\u2026",
    "CMD_LIVE_FILE_PREVIEW": "실시간 미리보기",
    "CMD_TOGGLE_LIVE_PREVIEW_MB_MODE": "실험적 실시간 미리보기 활성화",
    "CMD_RELOAD_LIVE_PREVIEW": "실시간 미리보기 다시 읽기",
    "CMD_PROJECT_SETTINGS": "프로젝트 설정\u2026",
    "CMD_FILE_RENAME": "파일명 변경",
    "CMD_FILE_DELETE": "삭제",
    "CMD_INSTALL_EXTENSION": "확장 기능 설치\u2026",
    "CMD_EXTENSION_MANAGER": "확장 기능 관리자\u2026",
    "CMD_FILE_REFRESH": "파일 트리 업데이트",
    "CMD_QUIT": "종료",
    // Used in native File menu on Windows
    "CMD_EXIT": "종료",

    // Edit menu commands
    "EDIT_MENU": "편집",
    "CMD_UNDO": "되돌리기",
    "CMD_REDO": "재실행",
    "CMD_CUT": "오려두기",
    "CMD_COPY": "복사하기",
    "CMD_PASTE": "붙여넣기",
    "CMD_SELECT_ALL": "전체 선택",
    "CMD_SELECT_LINE": "행 선택",
    "CMD_SPLIT_SEL_INTO_LINES": "선택영역을 여러 줄로 나누기",
    "CMD_ADD_CUR_TO_NEXT_LINE": "아랫줄에 커서 추가",
    "CMD_ADD_CUR_TO_PREV_LINE": "윗줄에 커서 추가",
    "CMD_INDENT": "들여쓰기",
    "CMD_UNINDENT": "내어쓰기",
    "CMD_DUPLICATE": "행 복사",
    "CMD_DELETE_LINES": "행 삭제",
    "CMD_COMMENT": "행 주석처리",
    "CMD_BLOCK_COMMENT": "블록 주석처리",
    "CMD_LINE_UP": "행을 위로 이동",
    "CMD_LINE_DOWN": "행을 아래로 이동",
    "CMD_OPEN_LINE_ABOVE": "상단에 라인 열기",
    "CMD_OPEN_LINE_BELOW": "하단에 라인 열기",
    "CMD_TOGGLE_CLOSE_BRACKETS": "자동 괄호",
    "CMD_SHOW_CODE_HINTS": "코드 힌트 표시",

    // Search menu commands
    "FIND_MENU": "검색",
    "CMD_FIND": "찾기",
    "CMD_FIND_NEXT": "다음 찾기",
    "CMD_FIND_PREVIOUS": "이전 찾기",
    "CMD_FIND_ALL_AND_SELECT": "전부 찾은 후 선택",
    "CMD_ADD_NEXT_MATCH": "다음 일치하는 단어 찾은 후 선택영역에 추가",
    "CMD_SKIP_CURRENT_MATCH": "현재 영역 건너뛰고 다음 찾기",
    "CMD_FIND_IN_FILES": "파일에서 찾기",
    "CMD_FIND_IN_SUBTREE": "다음에서 찾기\u2026",
    "CMD_REPLACE": "바꾸기",
    "CMD_REPLACE_IN_FILES": "파일에서 바꾸기",
    "CMD_REPLACE_IN_SUBTREE": "다음에서 바꾸기\u2026",

    // View menu commands
    "VIEW_MENU": "보기",
    "CMD_HIDE_SIDEBAR": "사이드 바 숨기기",
    "CMD_SHOW_SIDEBAR": "사이드 바 표시",
    "CMD_TOGGLE_SIDEBAR": "사이드바 표시 전환",
    "CMD_TOGGLE_PANELS": "패널 표시 전환",
    "CMD_TOGGLE_PURE_CODE": "코드만 보기",
    "CMD_INCREASE_FONT_SIZE": "폰트 크기 키우기",
    "CMD_DECREASE_FONT_SIZE": "폰트 크기 줄이기",
    "CMD_RESTORE_FONT_SIZE": "폰트 크기 초기화",
    "CMD_SCROLL_LINE_UP": "한줄 위로 스크롤",
    "CMD_SCROLL_LINE_DOWN": "한줄 아래로 스크롤",
    "CMD_TOGGLE_LINE_NUMBERS": "행 번호 보이기",
    "CMD_TOGGLE_ACTIVE_LINE": "활성 행 하이라이트",
    "CMD_TOGGLE_WORD_WRAP": "자동 줄바꿈",
    "CMD_LIVE_HIGHLIGHT": "실시간 미리보기 하이라이트",
    "CMD_VIEW_TOGGLE_INSPECTION": "저장시 파일 Lint표시",
    "CMD_WORKINGSET_SORT_BY_ADDED": "추가순으로 작업세트 정렬",
    "CMD_WORKINGSET_SORT_BY_NAME": "이름순으로 작업세트 정렬",
    "CMD_WORKINGSET_SORT_BY_TYPE": "타입별로 작업세트 정렬",
    "CMD_WORKING_SORT_TOGGLE_AUTO": "자동으로 작업세트 정렬",
    "CMD_THEMES": "테마\u2026",

    // Navigate menu Commands
    "NAVIGATE_MENU": "탐색",
    "CMD_QUICK_OPEN": "빠른 열기",
    "CMD_GOTO_LINE": "행으로 이동",
    "CMD_GOTO_DEFINITION": "빠른 정의 검색",
    "CMD_GOTO_FIRST_PROBLEM": "최초의 에러 또는 경고로 이동",
    "CMD_TOGGLE_QUICK_EDIT": "빠른 편집",
    "CMD_TOGGLE_QUICK_DOCS": "빠른 문서보기",
    "CMD_QUICK_EDIT_PREV_MATCH": "이전 결과로 이동",
    "CMD_QUICK_EDIT_NEXT_MATCH": "다음 결과로 이동",
    "CMD_CSS_QUICK_EDIT_NEW_RULE": "새 규칙",
    "CMD_NEXT_DOC": "다음 문서",
    "CMD_PREV_DOC": "이전 문서",
    "CMD_NEXT_DOC_LIST_ORDER": "목록의 다음 문서",
    "CMD_PREV_DOC_LIST_ORDER": "목록의 이전 문서",
    "CMD_SHOW_IN_TREE": "파일트리에서 보기",
    "CMD_SHOW_IN_EXPLORER": "탐색기에서 보기",
    "CMD_SHOW_IN_FINDER": "파인더에서 보기",
    "CMD_SHOW_IN_OS": "파일 위치 열기",

    // Help menu commands
    "HELP_MENU": "도움말",
    "CMD_CHECK_FOR_UPDATE": "업데이트 확인",
    "CMD_HOW_TO_USE_BRACKETS": "{APP_NAME} 사용법",
    "CMD_SUPPORT": "{APP_NAME} 지원",
    "CMD_SUGGEST": "기능 제안",
    "CMD_RELEASE_NOTES": "릴리즈 노트",
    "CMD_GET_INVOLVED": "프로젝트 참여",
    "CMD_SHOW_EXTENSIONS_FOLDER": "확장 기능 폴더 열기",
    "CMD_HEALTH_DATA_STATISTICS": "상태 보고서",
    "CMD_HOMEPAGE": "{APP_TITLE} 홈페이지",
    "CMD_TWITTER": "Twitter에서 {TWITTER_NAME} 팔로우하기",
    "CMD_ABOUT": "{APP_TITLE} 정보",
    "CMD_OPEN_PREFERENCES": "환경설정 파일 열기",
    "CMD_OPEN_KEYMAP": "사용자 키맵 파일 열기",

    // Strings for main-view.html
    "EXPERIMENTAL_BUILD": "시험 빌드",
    "RELEASE_BUILD": "빌드",
    "DEVELOPMENT_BUILD": "개발 빌드",
    "RELOAD_FROM_DISK": "디스크에서 다시 읽기",
    "KEEP_CHANGES_IN_EDITOR": "편집기에서 변경 내용을 유지",
    "CLOSE_DONT_SAVE": "저장하지 않고 닫기",
    "RELAUNCH_CHROME": "Chrome 재시작",
    "ABOUT": "이 소프트웨어에 대하여",
    "CLOSE": "닫기",
    "ABOUT_TEXT_LINE1": "스프린트 {VERSION_MINOR} {BUILD_TYPE} {VERSION}",
    "ABOUT_TEXT_BUILD_TIMESTAMP": "빌드 시각: ",
    "ABOUT_TEXT_LINE3": "제3자 소프트웨어의 사용에 관한 공지, 이용 약관은 <a href='{ADOBE_THIRD_PARTY}'>{ADOBE_THIRD_PARTY}</a>에 있으며 기록으로써 이곳에 존재합니다.",
    "ABOUT_TEXT_LINE4": "문서와 소스 코드는 <a href='https://github.com/adobe/brackets/'>https://github.com/adobe/brackets/</a>에서 구할 수 있습니다.",
    "ABOUT_TEXT_LINE5": "\u2764 및 JavaScript를 사용하여 다음의 사람에 의해 작성되었습니다 :",
    "ABOUT_TEXT_LINE6": "많은 사람들 (단, 인물 데이터 로딩에 문제가 발생하고 있습니다).",
    "ABOUT_TEXT_MDN_DOCS": "MDN 문서와 MDN 로고는 크리에이티브 커먼즈 저작자표시 라이선스, <a href='{MDN_DOCS_LICENSE}'>CC-BY-SA 2.5 Unported</a> 로 배포됩니다.",
    "UPDATE_NOTIFICATION_TOOLTIP": "{APP_NAME}의 새로운 빌드를 사용할 수 있습니다. 자세한 내용은 여기를 클릭하세요.",
    "UPDATE_AVAILABLE_TITLE": "사용 가능한 업데이트가 있습니다",
    "UPDATE_MESSAGE": "{APP_NAME}의 새로운 빌드를 사용할 수 있습니다. 새로운 기능의 일부를 다음에 소개합니다 :",
    "GET_IT_NOW": "지금 다운로드",
    "PROJECT_SETTINGS_TITLE": "프로젝트 설정 : {0}",
    "PROJECT_SETTING_BASE_URL": "실시간 미리보기에 대한 기본 URL",
    "PROJECT_SETTING_BASE_URL_HINT": "http://localhost:8000/ 등의 URL을 입력하여 로컬 서버를 사용",
    "BASEURL_ERROR_INVALID_PROTOCOL": "{0} 프로토콜이 실시간 미리보기가 지원되지 않습니다. http: 또는 https:를 사용하세요.",
    "BASEURL_ERROR_SEARCH_DISALLOWED": "기본 URL에는 「{0}」과(와) 같은 검색어를 사용할 수 없습니다.",
    "BASEURL_ERROR_HASH_DISALLOWED": "기본 URL에는 「{0}」과(와) 같은 해시 기호는 사용할 수 없습니다.",
    "BASEURL_ERROR_INVALID_CHAR": "「{0}」과(와) 같은 특수 문자는 퍼센트로 인코딩해야합니다.",
    "BASEURL_ERROR_UNKNOWN_ERROR": "기본 URL의 구문을 분석하는 동안 알 수 없는 오류가 발생했습니다",

    // Strings for Pane.js
    "EMPTY_VIEW_HEADER": "<em>이 창에 포커스가 있을 때 파일 열기</em>",
    "FLIPVIEW_BTN_TOOLTIP": "{0} 창에 이 보기를 반전",

    // Strings for themes-settings.html and themes-general.html
    "CURRENT_THEME": "현재 테마",
    "USE_THEME_SCROLLBARS": "테마에서 정의한 스크롤바 적용",
    "FONT_SIZE": "글자 크기",
    "FONT_FAMILY": "글꼴",
    "THEMES_SETTINGS": "테마 설정",

    // CSS Quick Edit
    "BUTTON_NEW_RULE": "새 규칙",

    // Extension Management strings
    "INSTALL": "설치",
    "UPDATE": "업데이트",
    "REMOVE": "삭제",
    "DISABLE": "비활성",
    "ENABLE": "활성",
    "OVERWRITE": "덮어쓰기",
    "CANT_REMOVE_DEV": "\"dev\" 폴더의 확장 기능은 수동으로 제거해야 합니다.",
    "CANT_UPDATE": "업데이트가 이 버전의 {APP_NAME}와 호환되지 않습니다.",
    "CANT_UPDATE_DEV": "\"dev\" 폴더의 확장 기능은 자동으로 업데이트 할 수 없습니다.",
    "INSTALL_EXTENSION_TITLE": "확장 기능 설치",
    "UPDATE_EXTENSION_TITLE": "확장 기능 업데이트",
    "INSTALL_EXTENSION_LABEL": "확장 기능 URL",
    "INSTALL_EXTENSION_HINT": "확장 기능 zip 파일 또는 GitHub 저장소의 URL",
    "INSTALLING_FROM": "{0}에서 확장 기능을 설치합니다",
    "INSTALL_SUCCEEDED": "설치에 성공했습니다.",
    "INSTALL_FAILED": "설치에 실패했습니다.",
    "CANCELING_INSTALL": "설치 취소중\u2026",
    "CANCELING_HUNG": "설치 취소에 시간이 지연되고 있습니다. 내부 에러가 발생했을 수 있습니다.",
    "INSTALL_CANCELED": "설치가 취소되었습니다.",
    "VIEW_COMPLETE_DESCRIPTION": "전체 설명 보기",
    "VIEW_TRUNCATED_DESCRIPTION": "설명 일부 숨기기",
    // These must match the error codes in ExtensionsDomain.Errors.* :
    "INVALID_ZIP_FILE": "다운로드 한 콘텐츠가 유효한 zip 파일이 아닙니다.",
    "INVALID_PACKAGE_JSON": "package.json 파일이 유효하지 않습니다 (에러: {0})",
    "MISSING_PACKAGE_NAME": "package.json 파일에 패키지 이름을 지정하지 않았습니다.",
    "BAD_PACKAGE_NAME": "{0} 잘못된 패키지 이름입니다.",
    "MISSING_PACKAGE_VERSION": "package.json 파일에 패키지 버전을 지정하지 않습니다.",
    "INVALID_VERSION_NUMBER": "패키지 버전 번호 ({0})가 잘못되었습니다.",
    "INVALID_BRACKETS_VERSION": "{APP_NAME} 호환 문자열 {0}이 잘못되었습니다.",
    "DISALLOWED_WORDS": "{1} {0} 필드에서는 사용할 수 없습니다.",
    "API_NOT_COMPATIBLE": "확장 기능은 이 버전의 {APP_NAME}와 호환되지 않습니다. 잘못된 확장 기능 폴더에 설치됩니다.",
    "MISSING_MAIN": "패키지에 main.js 파일이 포함되어 있지 않습니다.",
    "EXTENSION_ALREADY_INSTALLED": "이 패키지를 설치하면 이전에 설치한 확장 기능이 무시됩니다. 이전 확장을 덮어 쓰시겠습니까?",
    "EXTENSION_SAME_VERSION": "이 패키지 버전은 현재 설치되어있는 버전과 동일합니다. 기존 설치를 겹쳐 쓰시겠습니까?",
    "EXTENSION_OLDER_VERSION": "이 패키지 버전 ({0})은 현재 설치되어있는 버전 ({1})보다 이전 버전입니다. 기존 설치를 겹쳐 쓰시겠습니까?",
    "DOWNLOAD_ID_IN_USE": "내부 에러: 이미 사용 중인 다운로드 ID 입니다.",
    "NO_SERVER_RESPONSE": "서버에 연결할 수 없습니다.",
    "BAD_HTTP_STATUS": "파일 서버 (HTTP {0})에 찾을 수 없습니다.",
    "CANNOT_WRITE_TEMP": "임시 다운로드 파일을 저장할 수 없습니다.",
    "ERROR_LOADING": "확장 기능 시작 중 오류가 발생했습니다",
    "MALFORMED_URL": "URL이 잘못되었습니다. 제대로 입력되어 있는지 확인하세요.",
    "UNSUPPORTED_PROTOCOL": "URL은 http 또는 https URL이어야합니다.",
    "UNKNOWN_ERROR": "알 수 없는 내부 에러.",
    // For NOT_FOUND_ERR, see generic strings above
    "EXTENSION_MANAGER_TITLE": "확장 기능 관리자",
    "EXTENSION_MANAGER_ERROR_LOAD": "확장 기능 레지스트리에 액세스 할 수 없습니다. 나중에 다시 시도하십시오.",
    "INSTALL_EXTENSION_DRAG": "여기에 .zip 파일을 드래그하거나",
    "INSTALL_EXTENSION_DROP": "파일을 드롭하면 설치를 시작합니다.",
    "INSTALL_EXTENSION_DROP_ERROR": "에러가 발생하여 설치/업데이트가 종료되었습니다:",
    "INSTALL_FROM_URL": "URL에서 설치하세요\u2026",
    "INSTALL_EXTENSION_VALIDATING": "유효성 검사중\u2026",
    "EXTENSION_AUTHOR": "제작자",
    "EXTENSION_DATE": "제작일",
    "EXTENSION_INCOMPATIBLE_NEWER": "이 확장 기능은 새 버전의 {APP_NAME}가 필요합니다.",
    "EXTENSION_INCOMPATIBLE_OLDER": "이 확장 기능은 현재 이전 버전의 {APP_NAME}에서 작동하지 않습니다.",
    "EXTENSION_LATEST_INCOMPATIBLE_NEWER": "이 확장 기능 버전 {0}에는 {APP_NAME}의 새 버전이 필요합니다. 그러나 이전 버전 {1}을 설치할 수 있습니다.",
    "EXTENSION_LATEST_INCOMPATIBLE_OLDER": "이 확장 기능 버전 {0} {APP_NAME}의 이전 버전에서만 작동합니다. 그러나 이전 버전 {1}을 설치할 수 있습니다.",
    "EXTENSION_NO_DESCRIPTION": "설명 없음",
    "EXTENSION_MORE_INFO": "추가 정보...",
    "EXTENSION_ERROR": "확장 기능 에러",
    "EXTENSION_KEYWORDS": "키워드",
    "EXTENSION_TRANSLATED_USER_LANG": "{0}개 언어 지원. 한국어 포함",
    "EXTENSION_TRANSLATED_GENERAL": "{0}개 언어 지원",
    "EXTENSION_TRANSLATED_LANGS": "이 확장 기능은 다음 언어를 지원합니다: {0}",
    "EXTENSION_INSTALLED": "설치 완료",
    "EXTENSION_UPDATE_INSTALLED": "이 확장 기능의 업데이트가 다운로드되었습니다. {APP_NAME}를 종료할 때 설치합니다.",
    "EXTENSION_SEARCH_PLACEHOLDER": "검색",
    "EXTENSION_MORE_INFO_LINK": "상세 정보",
    "BROWSE_EXTENSIONS": "확장 기능 찾기",
    "EXTENSION_MANAGER_REMOVE": "확장 기능 제거",
    "EXTENSION_MANAGER_REMOVE_ERROR": "하나 이상의 확장 기능을 ({0}) 제거할 수 없습니다. {APP_NAME}가 종료 중입니다.",
    "EXTENSION_MANAGER_UPDATE": "확장 기능 업데이트",
    "EXTENSION_MANAGER_UPDATE_ERROR": "하나 이상의 확장 기능을 ({0}) 업데이트 할 수 없습니다. {APP_NAME}가 종료 중입니다.",
    "EXTENSION_MANAGER_DISABLE": "확장 기능 비활성",
    "EXTENSION_MANAGER_DISABLE_ERROR": "하나 이상의 확장 기능을 ({0}) 비활성화 할 수 없습니다. {APP_NAME}가 종료 중입니다.",
    "MARKED_FOR_REMOVAL": "삭제 예정",
    "UNDO_REMOVE": "삭제 취소",
    "MARKED_FOR_UPDATE": "업데이트 예정",
    "UNDO_UPDATE": "업데이트 취소",
    "MARKED_FOR_DISABLING": "비활성화 예정",
    "UNDO_DISABLE": "비활성화 취소",
    "CHANGE_AND_RELOAD_TITLE": "확장 기능 변경",
    "CHANGE_AND_RELOAD_MESSAGE": "업데이트 예정 또는 삭제 예정 확장 기능을 업데이트하거나 삭제하려면 {APP_NAME}를 재시작해야 합니다. 저장되지 않은 변경 내용은 저장여부를 확인합니다.",
    "REMOVE_AND_RELOAD": "확장 기능을 제거하고 재시작",
    "CHANGE_AND_RELOAD": "확장 기능을 변경하고 재시작",
    "UPDATE_AND_RELOAD": "확장 기능을 업데이트하고 재시작",
    "DISABLE_AND_RELOAD": "확장 기능을 비활성화하고 재시작",
    "PROCESSING_EXTENSIONS": "확장 기능 변경사항 처리 중\u2026",
    "EXTENSION_NOT_INSTALLED": "설치되지 않았기 때문에 확장 기능 {0}을 삭제할 수 없습니다.",
    "NO_EXTENSIONS": "설치되어있는 확장 기능이 아직 없습니다. <br>에서 「설치 가능」탭을 클릭하여 설치하세요.",
    "NO_EXTENSION_MATCHES": "검색 조건에 일치하는 확장 기능이 없습니다.",
    "REGISTRY_SANITY_CHECK_WARNING": "알 수 없는 소스에서 확장 기능을 설치할 때 주의하세요.",
    "EXTENSIONS_INSTALLED_TITLE": "설치됨",
    "EXTENSIONS_AVAILABLE_TITLE": "설치 가능",
    "EXTENSIONS_THEMES_TITLE": "테마",
    "EXTENSIONS_UPDATES_TITLE": "업데이트",

    "INLINE_EDITOR_NO_MATCHES": "일치하는 항목이 없습니다.",
    "INLINE_EDITOR_HIDDEN_MATCHES": "All matches are collapsed. Expand the files listed at right to view matches.",
    "CSS_QUICK_EDIT_NO_MATCHES": "선택 일치하는 기존 CSS 규칙이 없습니다. <br> 「새 규칙」을 클릭하여 규칙을 작성하세요.",
    "CSS_QUICK_EDIT_NO_STYLESHEETS": "프로젝트에는 스타일 시트가 없습니다. <br> 스타일 시트를 작성하여 CSS 규칙에 추가하세요.",

    // Custom Viewers
    "IMAGE_VIEWER_LARGEST_ICON": "최대",

    /**
     * Unit names
     */
    "UNIT_PIXELS": "픽셀",

    // extensions/default/DebugCommands
    "DEBUG_MENU": "디버그",
    "ERRORS": "에러",
    "CMD_SHOW_DEV_TOOLS": "개발자 도구 보기",
    "CMD_REFRESH_WINDOW": "{APP_NAME} 재시작",
    "CMD_RELOAD_WITHOUT_USER_EXTS": "확장 기능 없이 재시작",
    "CMD_NEW_BRACKETS_WINDOW": "새로운 {APP_NAME} 창",
    "CMD_LAUNCH_SCRIPT_MAC": "명령 줄 바로가기 설치",
    "CMD_SWITCH_LANGUAGE": "언어 변경",
    "CMD_RUN_UNIT_TESTS": "테스트 실행",
    "CMD_SHOW_PERF_DATA": "성능 데이터를 표시",
    "CMD_ENABLE_NODE_DEBUGGER": "Node Debugger 사용",
    "CMD_LOG_NODE_STATE": "Node 상태를 콘솔에 기록",
    "CMD_RESTART_NODE": "Node를 다시 시작",
    "CMD_SHOW_ERRORS_IN_STATUS_BAR": "에러를 상태표시줄에 표시",
    "CMD_OPEN_BRACKETS_SOURCE": "{APP_NAME} 소스 열기",

    "CREATING_LAUNCH_SCRIPT_TITLE": "{APP_NAME} 명령 줄 바로가기",
    "ERROR_CREATING_LAUNCH_SCRIPT": "명령 줄 바로가기를 설치하는 동안 오류가 발생했습니다. <a href='https://github.com/adobe/brackets/wiki/Command-Line-Arguments#troubleshooting'>이런 문제를 해결하기 위한 제안</a>을 시도해 보세요.<br/><br/>원인: {0}",
    "ERROR_CLTOOLS_RMFAILED": "기존의 <code>/usr/local/bin/brackets</code> 심볼릭 링크를 제거할 수 없습니다.",
    "ERROR_CLTOOLS_MKDIRFAILED": "<code>/usr/local/bin</code> 디렉토리를 만들 수 없습니다.",
    "ERROR_CLTOOLS_LNFAILED": "<code>/usr/local/bin/brackets</code> 심볼릭 링크를 만들 수 없습니다.",
    "ERROR_CLTOOLS_SERVFAILED": "내부 오류입니다.",
    "ERROR_CLTOOLS_NOTSUPPORTED": "현재 운영체제(OS)가 명령줄 바로가기를 지원하지 않습니다.",
    "LAUNCH_SCRIPT_CREATE_SUCCESS": "성공! 이제부터 명령 줄에서 쉽게 {APP_NAME}를 시작할 수 있습니다: 파일을 열기 위해 <code>brackets myFile.txt</code> 또는 프로젝트를 전환하기 위해 <code>brackets myFolder</code>. <br/><br/>명령 줄에서 {APP_NAME}를 사용하기 위한 <a href='https://github.com/adobe/brackets/wiki/Command-Line-Arguments'>더 자세한 정보</a>.",

    "LANGUAGE_TITLE": "언어 변경",
    "LANGUAGE_MESSAGE": "언어:",
    "LANGUAGE_SUBMIT": "{APP_NAME} 재시작",
    "LANGUAGE_CANCEL": "취소",
    "LANGUAGE_SYSTEM_DEFAULT": "시스템 언어",

    // extensions/default/HealthData
    "HEALTH_DATA_NOTIFICATION": "상태 보고서 환경설정",
    "HEALTH_FIRST_POPUP_TITLE": "{APP_NAME} 상태 보고서",
    "HEALTH_DATA_DO_TRACK": "{APP_NAME} 사용 행태 정보를 익명으로 공유",
    "HEALTH_DATA_NOTIFICATION_MESSAGE": "{APP_NAME} 개선을 위해 고객이 {APP_NAME}를 어떻게 사용하는지에 관한 제한된 <strong>익명</strong> 통계를 Adobe에 주기적으로 전송합니다. 이 정보는 기능의 우선 순위를 정하고, 버그를 찾고, 사용성 문제를 해결하는데 도움을 줍니다.<br><br>고객의 데이터를 보거나 또는 데이터를 공유하지 않도록 하려면 <strong>도움말 > 상태 보고서</strong>를 선택하세요. <a href='https://github.com/adobe/brackets/wiki/Health-Data'>{APP_NAME} 상태 보고서에 관한 자세한 정보.</a>",
    "HEALTH_DATA_PREVIEW": "{APP_NAME} 상태 보고서",
    "HEALTH_DATA_PREVIEW_INTRO": "<p>{APP_NAME} 개선을 위해 고객이 {APP_NAME}를 어떻게 사용하는지에 관한 제한된 <strong>익명</strong> 통계를 Adobe에 주기적으로 전송하고 있습니다. 이 정보는 기능의 우선 순위를 정하고, 버그를 찾고, 사용성 문제를 해결하는데 도움을 줍니다. 고객의 개인정보를 보호하면서 {APP_NAME} 커뮤니티에 어떤 이득을 주는지 <a href='https://github.com/adobe/brackets/wiki/Health-Data'>{APP_NAME} 상태 보고서에 관해 자세히 알아보세요</a>.</p><p><em>만약</em> 상태 보고서 전송이 가능한 상태라면 아래 미리보기 데이터는 고객의 다음 번 상태 보고서로 전송할 것입니다.</p>",

    // extensions/default/InlineTimingFunctionEditor
    "INLINE_TIMING_EDITOR_TIME": "시간",
    "INLINE_TIMING_EDITOR_PROGRESSION": "진행",
    "BEZIER_EDITOR_INFO": "<kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> Move selected point<br><kbd class='text'>Shift</kbd> Move by ten units<br><kbd class='text'>Tab</kbd> Switch points",
    "STEPS_EDITOR_INFO": "<kbd>↑</kbd><kbd>↓</kbd> 단계를 증가 또는 감소 <br><kbd>←</kbd><kbd>→</kbd> '시작' 또는 '끝내기'",
    "INLINE_TIMING_EDITOR_INVALID": "이전의 값 <code>{0}</code>이 유효하지 않으므로 표시된 기능이 <code>{1}</code>로 변경되었습니다. 문서가 첫 번째 수정으로 업데이트됩니다.",

    // extensions/default/InlineColorEditor
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "현재색",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "원본색",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa 형식",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "16 진수",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa 형식",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} ({1}시간 사용)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} ({1}시간 사용)",

    // extensions/default/JavaScriptCodeHints
    "CMD_JUMPTO_DEFINITION": "정의로 이동",
    "CMD_SHOW_PARAMETER_HINT": "파라메터 정보를 표시",
    "NO_ARGUMENTS": "<매개변수가 없습니다>",
    "DETECTED_EXCLUSION_TITLE": "자바스크립트 파일 추론 문제",
    "DETECTED_EXCLUSION_INFO": "Brackets에서 <span class='dialog-filename'>{0}</span> 파일을 처리하던 중 문제가 발생했습니다.<br><br>이 파일은 코드 힌트, 정의 이동, 빠른 편집 등에서 사용되지 않을 것입니다. 이 파일을 다시 사용하려면 프로젝트 폴더에 있는 <code>.brackets.json</code> 파일을 열고 <code>jscodehints.detectedExclusions</code> 항목을 수정하세요.<br><br>Backets의 버그일 수 있습니다. 이 파일의 사본을 제출할 수 있다면 여기서 말한 파일과 함께<a href='https://github.com/adobe/brackets/wiki/How-to-Report-an-Issue'>버그 보고</a>에 등록해주세요.",

    // extensions/default/JSLint
    "JSLINT_NAME": "JSLint",

    // extensions/default/QuickView
    "CMD_ENABLE_QUICK_VIEW": "QuickView 사용",

    // extensions/default/RecentProjects
    "CMD_TOGGLE_RECENT_PROJECTS": "최근에 사용한 프로젝트",

    // extensions/default/MDNDocs
    "DOCS_MORE_LINK": "상세 정보",

    // extensions/default/CodeFolding
    "COLLAPSE_ALL": "모두 접기",
    "EXPAND_ALL": "모두 펼치기",
    "COLLAPSE_CURRENT": "현재 코드 접기",
    "EXPAND_CURRENT": "현재 코드 펼치기",

    // Descriptions of core preferences
    "DESCRIPTION_CLOSE_BRACKETS": "괄호(), 중괄호{}, 대괄호[]를 자동으로 닫으려면 true",
    "DESCRIPTION_CLOSE_OTHERS_ABOVE": "작업중인 파일 콘텍스트 메뉴에서 \"위의 목록 닫기\"를 제거하려면 false",
    "DESCRIPTION_CLOSE_OTHERS_BELOW": "작업중인 파일 콘텍스트 메뉴에서 \"아래 목록 닫기\"를 제거하려면 false",
    "DESCRIPTION_CLOSE_OTHERS": "작업중인 파일 콘텍스트 메뉴에서 \"다른 파일 닫기\"를 제거하려면 false",
    "DESCRIPTION_CLOSE_TAGS": "태그 종료 옵션 설정",
    "DESCRIPTION_CLOSE_TAGS_DONT_CLOSE_TAGS": "자동으로 닫지 말아야 할 태그 목록",
    "DESCRIPTION_CLOSE_TAGS_WHEN_OPENING": "시작 태그 > 입력 시 닫기",
    "DESCRIPTION_CLOSE_TAGS_WHEN_CLOSING": "종료 태그 / 입력 시 닫기",
    "DESCRIPTION_CLOSE_TAGS_INDENT_TAGS": "열릴 때 빈 줄 하나를 포함해야 하는 태그 목록",
    "DESCRIPTION_CODE_FOLDING_ALWAY_USE_INDENT_FOLD": "들여쓰기 수준을 변경할 때 접을 수 있는 섹션 마커를 항상 생성하려면 true",
    "DESCRIPTION_CODE_FOLDING_ENABLED": "코드 접기를 활성화 하려면 true",
    "DESCRIPTION_CODE_FOLDING_HIDE_UNTIL_MOUSEOVER": "빈 공간에 마우스 포인터를 두는 경우에만 섹션 접기 마커를 표시하려면 true",
    "DESCRIPTION_CODE_FOLDING_MAX_FOLD_LEVEL": "모두 접기를 얼마나 깊게 적용할 것인지 수준을 제한합니다",
    "DESCRIPTION_CODE_FOLDING_MIN_FOLD_SIZE": "섹션 접기 아이콘을 표시하기 위한 최소 라인 수",
    "DESCRIPTION_CODE_FOLDING_SAVE_FOLD_STATES": "파일 또는 프로젝트를 닫거나 다시 열 때 접은 섹션을 기억해야 한다면 true",
    "DESCRIPTION_CODE_FOLDING_MAKE_SELECTIONS_FOLDABLE": "편집기 안에서 선택한 텍스트에 대한 코드 접기 기능을 활성화 하려면 true",
    "DESCRIPTION_ATTR_HINTS": "HTML 속성 힌트 활성/비활성",
    "DESCRIPTION_CSS_PROP_HINTS": "CSS/LESS/SCSS 속성 힌트 활성/비활성",
    "DESCRIPTION_JS_HINTS": "JavaScript 코드 힌트 활성/비활성",
    "DESCRIPTION_JS_HINTS_TYPE_DETAILS": "JavaScript 코드 힌트에 데이터 타입 상세 활성/비활성",
    "DESCRIPTION_PREF_HINTS": "환경설정 코드 힌트 활성/비활성",
    "DESCRIPTION_SPECIAL_CHAR_HINTS": "HTML 엔터티 힌트 활성/비활성",
    "DESCRIPTION_SVG_HINTS": "SVG 코드 힌트 활성/비활성",
    "DESCRIPTION_HTML_TAG_HINTS": "HTML 태그 힌트 활성/비활성",
    "DESCRIPTION_URL_CODE_HINTS": "HTML & CSS/LESS/SCSS의 URL 힌트 활성/비활성",
    "DESCRIPTION_DRAG_DROP_TEXT": "드래그 앤 드롭 기능 활성/비활성",
    "DESCRIPTION_HEALTH_DATA_TRACKING": "상태 데이터 추적 활성화",
    "DESCRIPTION_HIGHLIGHT_MATCHES": "문서 내에서 일치하는 문자열 자동 강조 활성화",
    "DESCRIPTION_HIGHLIGHT_MATCHES_SHOW_TOKEN": "현재 커서가 있는 토큰과 일치하는 모든 문자열 강조(선택 불필요)",
    "DESCRIPTION_HIGHLIGHT_MATCHES_WORDS_ONLY": "선택 항목이 완전한 토큰인 경우에만 강조",
    "DESCRIPTION_INSERT_HINT_ON_TAB": "탭에서 현재 선택한 코드 힌트를 삽입하려면 true",
    "DESCRIPTION_NO_HINTS_ON_DOT": ". 입력 시 JS 코드 힌트를 자동으로 표시하지 않으려면 true",
    "DESCRIPTION_JSLINT_OPTIONS": "JSLint 기본 옵션 적용 객체",
    "DESCRIPTION_JSLINT_OPTIONS_ASS": "할당 표현식을 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_BITWISE": "비트 연산자를 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_BROWSER": "표준 브라우저의 전역 변수를 미리 정의하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_CLOSURE": "구글 클로저 관용구를 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_CONTINUE": "\"continue\" 문을 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_COUCH": "CouchDB 전역 변수를 미리 정의해야 하는 경우 true",
    "DESCRIPTION_JSLINT_OPTIONS_DEBUG": "디버거 문을 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_DEVEL": "개발 편의를 위해 브라우저 전역 변수를 미리 정의하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_EQEQ": "==과 !=를 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_ES6": "ES6 전역 변수를 미리 정의하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_EVIL": "eval을 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_FORIN": "필터링하지 않은 \"for ... in\"을 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_INDENT": "탭 폭 설정",
    "DESCRIPTION_JSLINT_OPTIONS_MAXERR": "최대 경고 수",
    "DESCRIPTION_JSLINT_OPTIONS_MAXLEN": "한개 행 최대 문자 수",
    "DESCRIPTION_JSLINT_OPTIONS_NEWCAP": "알파벳 대문자로 시작하지 않는 생성자를 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_NODE": "Node.js 전역 변수를 미리 정의하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_NOMEN": "언더스코어(_)로 시작하는 식별자를 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_PASSFAIL": "첫 오류 발생 시 중지하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_PLUSPLUS": "++와 --를 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_REGEXP": "정규 표현식에서 .과 [^...].을 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_RHINO": "Rhino 전역 변수를 미리 정의하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_SLOPPY": "`use strict` 지시어 생략을 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_STUPID": "블록 ('...Sync') 메서드를 사용할 수 있는 경우 true.",
    "DESCRIPTION_JSLINT_OPTIONS_SUB": "비효율적인 첨자 지정을 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_TODO": "TODO 주석을 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_UNPARAM": "사용하지 않는 매개 변수를 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_VARS": "함수 안에서 하나 이상의 변수를 허용하려면 true",
    "DESCRIPTION_JSLINT_OPTIONS_WHITE": "공백 규칙을 무시하려면 true",
    "DESCRIPTION_LANGUAGE": "언어 별 설정",
    "DESCRIPTION_LANGUAGE_FILE_EXTENSIONS": "파일 확장자를 통해 언어 이름 매핑",
    "DESCRIPTION_LANGUAGE_FILE_NAMES": "파일 이름을 통해 언어 이름 매핑",
    "DESCRIPTION_LINTING_ENABLED": "코드 검사를 활성화 하려면 true",
    "DESCRIPTION_ASYNC_TIMEOUT": "비동기 구문 검사 초과 시간을 밀리세컨드로 표기",
    "DESCRIPTION_LINTING_PREFER": "최초 실행 구문 검사 배열",
    "DESCRIPTION_LIVE_DEV_MULTIBROWSER": "실험적 실시간 미리보기를 활성화 하려면 true",
    "DESCRIPTION_USE_PREFERED_ONLY": "제공자에 의해 기술된 linting.prefer 만으로 실행하려면 true",
    "DESCRIPTION_MAX_CODE_HINTS": "한 번에 표시되는 최대 코드 힌트",
    "DESCRIPTION_PATH": "경로 별 설정",
    "DESCRIPTION_PROXY": "확장기능 설치를 위해 사용된 프록시 서버 URL",
    "DESCRIPTION_SCROLL_PAST_END": "문서 끝을 넘어선 스크롤을 활성화 하려면 true",
    "DESCRIPTION_SHOW_CODE_HINTS": "모든 코드 힌트를 비활성화 하려면 false",
    "DESCRIPTION_SHOW_CURSOR_WHEN_SELECTING": "문자를 선택한 경우 깜빡이는 커서 표시",
    "DESCRIPTION_SHOW_LINE_NUMBERS": "코드 왼쪽의 “여백”에 행 번호를 표시하려면 true",
    "DESCRIPTION_SMART_INDENT": "새 블록을 만들 때 자동 들여쓰기",
    "DESCRIPTION_SOFT_TABS": "소프트 탭 작동을 끄려면 false",
    "DESCRIPTION_SORT_DIRECTORIES_FIRST": "프로젝트 트리에서 디렉토리 우선 정렬하려면 true",
    "DESCRIPTION_SPACE_UNITS": "공백 기반의 들여쓰기를 위한 공백 수",
    "DESCRIPTION_STATIC_SERVER_PORT": "실시간 미리보기를 위한 빌트인 서버 포트 번호",
    "DESCRIPTION_STYLE_ACTIVE_LINE": "커서가 있는 행의 배경 색을 강조하려면 true",
    "DESCRIPTION_TAB_SIZE": "탭 표시를 위한 공백 수",
    "DESCRIPTION_USE_TAB_CHAR": "공백 대신 탭을 사용하려면 true",
    "DESCRIPTION_UPPERCASE_COLORS": "인라인 색상 편집기에서 대문자 16진수 색을 생성하려면 true",
    "DESCRIPTION_WORD_WRAP": "뷰포트 폭을 초과하는 행 감싸기",
    "DESCRIPTION_DETECTED_EXCLUSIONS": "통제 불가능한 실행 Tern을 유발하도록 감지된 파일 목록",
    "DESCRIPTION_INFERENCE_TIMEOUT": "파일 인식 시 Tern이 초과될 때 까지의 시간",
    "DESCRIPTION_SHOW_ERRORS_IN_STATUS_BAR": "상태 표시 줄에 오류를 표시하려면 true",
    "DESCRIPTION_QUICK_VIEW_ENABLED": "빠른 보기를 활성화 하려면 true",
    "DESCRIPTION_EXTENSION_LESS_IMAGE_PREVIEW": "URL 없는 확장 기능의 이미지 미리보기를 표시하려면 true",
    "DESCRIPTION_THEME": "{APP_NAME} 테마 선택",
    "DESCRIPTION_USE_THEME_SCROLLBARS": "사용자 정의 스크롤 바를 허용하려면 true",
    "DESCRIPTION_LINTING_COLLAPSED": "구문 검사 패널을 접어 두려면 true",
    "DESCRIPTION_FONT_FAMILY": "글꼴 변경",
    "DESCRIPTION_FONT_SIZE": "글꼴 크기 변경(예: 13px)",
    "DESCRIPTION_FIND_IN_FILES_NODE": "노드 기반 검색을 활성화 하려면 true",
    "DESCRIPTION_FIND_IN_FILES_INSTANT": "빠른 검색을 활성화 하려면 true",
    "DESCRIPTION_FONT_SMOOTHING": "맥 전용: 서브픽셀 안티 에일리어싱을 활성화 하려면 \"subpixel-antialiased\" 회색조 안티 에일리어싱을 활성화 하려면 \"antialiased\"",
    "DESCRIPTION_OPEN_PREFS_IN_SPLIT_VIEW": "분할 보기에서 파일 환경 설정 열기를 비 활성화 하려면 false",
    "DESCRIPTION_OPEN_USER_PREFS_IN_SECOND_PANE": "사용자 환경 설정 파일을 좌측/상단 창에서 열려면 false",
    "DESCRIPTION_MERGE_PANES_WHEN_LAST_FILE_CLOSED": "창 헤더의 닫기 버튼을 통해 마지막으로 닫힌 창을 접으려면 true",
    "DESCRIPTION_SHOW_PANE_HEADER_BUTTONS": "헤더에 닫기 버튼과 반전 보기 버튼 표시 전환.",
    "DEFAULT_PREFERENCES_JSON_HEADER_COMMENT": "/*\n * 이것은 {APP_NAME}에 의해 환경 설정이 지원된 읽기 전용 파일입니다.\n * 이 파일은 다른 창에서 열린 \"brackets.json\" 환경 설정 파일을 수정하기 위한 참조로 사용합니다.\n * {APP_NAME} 환경 설정을 어떻게 하는지에 관한 더 많은 정보는 웹 페이지를 참고하세요.\n * https://github.com/adobe/brackets/wiki/How-to-Use-Brackets#preferences\n */",
    "DEFAULT_PREFERENCES_JSON_DEFAULT": "기본",
    "DESCRIPTION_PURE_CODING_SURFACE": "{APP_NAME}에서 코드 전용 모드를 실행하고 다른 모든 UI 요소 숨기기를 활성화 하려면 true"
});

/* Last translated for fcd2e98ef35c110e00aebfbb6d3c3816e5156552 */
