CURIOUS CLINICS — FREE GOOGLE SHEETS SIGNUP SETUP

The website is configured to send signups to a Google Sheet through a free
Google Apps Script web app.

1. Create a Google Sheet.
2. In row 1, use these headings:
   Timestamp | Child Name | Parent/Guardian Name | Phone | Email |
   Day Attending | Location | Additional Comments
3. Open Extensions > Apps Script.
4. Copy the contents of google_apps_script.gs into the Apps Script editor.
5. Click Deploy > New deployment.
6. Select Web app.
7. Execute as: Me.
8. Who has access: Anyone.
9. Click Deploy and complete Google's authorization.
10. Copy the Web app URL ending in /exec.
11. Open index.html and replace:
    PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
    with your Web app URL.
12. Save index.html and upload it to your GitHub Pages repository.

IMPORTANT:
- Keep the spreadsheet private; only organizers should have access.
- The signup form collects parent/guardian contact information and child names,
  so use reasonable privacy/security practices.
- Google may change its Apps Script interface over time. The core setup above
  is the standard Google Apps Script Web App flow.
