# api-scaffolder

## Solves our current problem on Node.js servers: Routing and wiring of RAML definitions
>  ### Yesterday's node implementation:  
  ```
    custom router
  + osprey for validation
  + custom wiring
  + implementation
  ```
### Today's:
  ```
  RAML
  + implementation
  ```  

## Generates typescript interfaces for requests and responses
## It validates the requests using osprey's internal modules
## Problems on implementations now will be detected at compilation time or in realtime within the IDE
## Allows the developer to update raml definitions without breaking their implementation (solves an apikit problem)
## Semantic versioning of api implementations on same project
## It forces the developer to mantain up to date the RAML definitions
## It enforces the RAML contract
