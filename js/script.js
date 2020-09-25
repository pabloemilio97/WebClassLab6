$("#addButton").on("click", function(event) {
    event.preventDefault();
    var name = $("#input").val();
    $("#list").append(
        `<div class="item">
            <h2 class="itemText">${name}</h2>
            <button type="submit" id="checkButton">check</button>
            <button type="submit" id="deleteButton">delete</button>
        </div>`
    );
})

$("#list").on("click", "#checkButton", function() { 
    $(this).siblings('.itemText').toggleClass('strikethrough');
})

$("#list").on("click", "#deleteButton", function() {
    $(this).parent().remove();
})