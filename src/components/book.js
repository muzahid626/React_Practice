import React from "react";

const Book = props =>{
    return (
        <div>
            <h3 onClick={props.change}>Book :{props.BookName}</h3>
            <h4>Writer :{props.Writer}</h4>

        </div>

    );
}

export default Book;