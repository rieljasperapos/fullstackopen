```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User creates a new note by writing on the form and clicking save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server

    Note left of browser: received the user input and append it to the notes list
    server-->>browser: HTML Document, CSS, Javascript and updated JSON notes data
    deactivate server

    Note right of browser: Issued another GET request to the notes page 
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML Document, css file, javascript file, data.json
    deactivate server

    Note left of browser: renders the updated notes page with the new note added
```