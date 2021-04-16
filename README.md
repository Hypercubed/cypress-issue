# Cypress Timing Issue

This test is trying to simulate an issue we are seeing in a large app.  I'm not certain this is an accurate representation of the issue.  Basically, we have a event that creates a notification and triggers various actions (API calls, UI updates, etc).  The notification is displayed in the UI for a few seconds.  Test passes when running in the UI (`cypress run`) in both v6.4 and v7.1 but fails when running v7.1 in docker.


