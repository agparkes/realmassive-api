# The RealMassive API

The main API address: **http://www.realmassive.com/api/v1/**

## Spaces

### Searching

`GET /api/v1/spaces/search/<query>?<query_parameters>`

__Query is required.__

_Examples_: Austin, 1717+west+6th, Hartland

Query parameters are optional.

 - Filters
   - distance_min - 0 by default
   - distance_max - unlimited by default
   - rate_min - minimum rate for existing Spaces by default
   - rate_max - maximum rate for existing Spaces by default
   - space_min - minimum available space for existing Spaces by default
   - space_max - maximum available space for existing Spaces by default
   - types - comma-separated list of space types to filter by:
     - Industrial
     - Office
     - Retail
     - Land
     - Flex Space
   - submarkets - comma-separated list of submarkets to filter by:
     - Central Business District
     - Cedar Park
     - Central
     - East
     - South
     - Far Northeast
     - Far Northwest
     - Georgetown
     - North
     - Northeast
     - Northwest
     - Round Rock
     - Southeast
     - Southwest
     - West Central
     - North Central
 - evaluation filters to sort order
   - location_importance - 0 by default
   - rate_importance - 0 by default
   - space_importance - 0 by default
   - limit results
   - limit - 10 by default

A call to our api returns JSON representations of matching spaces.

    {
    	"cursor": null or alpha numeric, 
    	"results": [
    		{
    			<space obect>
    		},
    		...
    	]
    }

__JSON Space Object__

 - key: 
   - String - Unique key of the space. example: ahJzfnJlYWxtYXNzaXZlLXByb2RyEgsSBVNwYWNlGICAgIDGmewLDA
 - space_id:
   - String - Id to use in RealMassive url. example: 6668316294774784
     - http://www.realmassive.com/spaces/6668316294774784
 - manager_name
   - String - The managers name
 - manager
   - String - Unique Key, example: ahJzfnJlYWxtYXNzaXZlLXByb2RyGQsSDE9yZ2FuaXphdGlvbhiAgICA5qLPCgw
 - contact:
   - String - Name of contact for the space.  May differ from the manager
 - address: 
   - String - Full address. example: 1717 West 6th St Austin 78703 TX
 - geo: 
   - Object:
     - latitude
     - longitude
 - street
   - String - Streat Address
 - unit_number: 
   - String - Addres unit or suite number
 - city:
   - String - City 
 - zipcode: 
   - String - zipcode
 - state: 
   - String - Abbreviation for state
 - full_state:
   - String - Full State
 - title: 
   - String - Name of the space
 - description: 
   - String - text blob of description of the Space
 - submarket
   - String - Submarkets
 - space_type:
   - String - Lease or Sale
 - type: 
   - String - One of the available building types
 - building_class
   - String - Building class ex. A, B, C
 - number_of_attachments:
   - Integer - Number of attachments
 - attachment: 
   - String or Array of Strings- url to main image of the space example: https://lh3.ggpht.com/z5xfjk1WH2UwTTERWYQf5AKQI794nXFYgJR13xm9hjoZ_Aa0clPy9e_CTbqWiPxAiaIgW3uyQU1EMF9uJUTGWdzmwpdBBw
 - size:
   - Integer - 
 - space_available:
   - Integer - the amount of space available
 - space_available_units:
   - Available space units, default "SF"
 - rate:
   - Integer or Float - Price per sq. ft. per year or per month 
 - operating_expenses:
   - Integer or Float - Operating Expenses 
 - building_parking_ratio: 
   - Float - number of parkings spaces per 1000 sq. ft.
 - divisible:
   - Integer:
     - 1 - space is divisible
     - 0 - space is not divisible
 - ac
   - Integer
   - 1 - Has AC
   - 0 - No AC


### Individual Spaces

`GET /api/v1/spaces/<keystring>`

Returns Space object specified by keystring as JSON.
