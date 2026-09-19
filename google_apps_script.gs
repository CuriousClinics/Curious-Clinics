/*
CURIOUS CLINICS — GOOGLE SHEETS FORM RECEIVER

SETUP:
1. Create a new Google Sheet.
2. Rename the first sheet "Signups" (optional).
3. Put these headers in row 1:
   Timestamp | Child Name | Parent/Guardian Name | Phone | Email | Day Attending | Location | Additional Comments
4. In Google Sheets, open Extensions > Apps Script.
5. Delete the starter code and paste this entire file.
6. Click Deploy > New deployment.
7. Choose "Web app" as the deployment type.
8. Set "Execute as" to Me.
9. Set access to "Anyone".
10. Deploy and authorize it.
11. Copy the Web App URL (it ends in /exec).
12. Paste that URL into index.html where it says:
    PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
13. Upload the updated index.html to GitHub Pages.

The script only adds submitted form data as a new row.
*/

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  let data = {};
  try {
    data = JSON.parse(e.postData.contents || '{}');
  } catch (err) {
    data = {};
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'Child Name',
      'Parent/Guardian Name',
      'Phone',
      'Email',
      'Day Attending',
      'Location',
      'Additional Comments'
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.childName || '',
    data.parentName || '',
    data.phone || '',
    data.email || '',
    data.day || '',
    data.location || '',
    data.comments || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
