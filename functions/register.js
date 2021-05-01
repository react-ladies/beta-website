const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(process.env.AIRTABLE_BASE)

exports.handler = async function(event) {
  // ?name=Katherine Johnson&github=nasa&city=online-2021-may
  const { name, github, city } = event.queryStringParameters

  if (!name || !city) {
    console.error(err)
    return
  }

  try {
    await base(process.env.AIRTABLE_TABLE).create(
      {
        name: name,
        city: city,
        ghLink: github
      },
      (err, record) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`Human was created, document ID is ${record.getId()}`)
      }
    )
    return {
      statusCode: 200,
      body: `Successfully added ${event.queryStringParameters.name}`
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err.message)
    }
  }
}
