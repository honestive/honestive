const _ = require('lodash')
const {
  google: {
    analyticsreporting,
  },
} = require('googleapis')
const client = require('./client')

const analyticsReportingClient = analyticsreporting({
  version: 'v4',
  auth: client.oAuth2Client,
})

const scopes = ['https://www.googleapis.com/auth/analytics']
client
  .authenticate(scopes)
  .then(() => console.log('Authed!'))
  .catch(console.error);

module.exports = async (root, args, ctx) => {
  const res = await analyticsReportingClient.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: process.env.GOOGLE_ANALYTICS_VIEW_ID,
          dateRanges: [
            {
              startDate: '365daysAgo',
              endDate: 'today',
            },
          ],
          dimensions: [
            {
              name: 'ga:month',
            },
          ],
          metrics: [
            {
              expression: 'ga:pageviews',
            },
          ],
        },
      ],
    },
  })

  return true
}
