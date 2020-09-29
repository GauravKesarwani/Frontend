const saveResumeLinkEl = document.querySelector('.save-resume');

function postData(url = ``, data = {}) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // "Content-Type": "application/x-www-form-urlencoded", }
    body: JSON.stringify(data),
    mode: "cors",
    cache: "no-cache",    // This header is for caching response of post request. This does not mean that browser will not cache. Check ETag
    referrer: "no-referrer"
  })
  .then(response => response.json());   // parse response to json
}


saveResumeLinkEl.addEventListener('click', (event) => {
  const applicantId = event.target.dataset.applicantId;           // can also use getAttribute();
  const url = 'api/v1/applicant';
  postData(url, { applicantId });
});
