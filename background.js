const OFFICE_EXTENSIONS = ['xls', 'xlsx', 'ppt', 'pptx', 'doc', 'docx'];
const VIEWER_URL = 'https://view.officeapps.live.com/op/view.aspx?src=';

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const url = new URL(details.url);
  const extension = url.pathname.split('.').pop().toLowerCase();

  if (OFFICE_EXTENSIONS.includes(extension)) {
    const newUrl = VIEWER_URL + encodeURIComponent(details.url);
    chrome.tabs.update(details.tabId, { url: newUrl });
  }
});