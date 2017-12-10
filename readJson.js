//code to call onload function
//windows.onload...

$(document).ready(function () {
        // EXTRACT JSON DATA.
        $.getJSON("domains.json", function (data) 
        		{
            $.each(data, function (index, value) {
                // APPEND OR INSERT DATA TO SELECT ELEMENT.
                $('#sel').append('<option value="' + value.domainName + '">' + value.domainName + '</option>');
            });
        });

        // SELECT change EVENT TO READ SELECTED VALUE FROM DROPDOWN LIST.
        $('#sel').change(function () {
            $('p').text('Selected Item: ' + this.options[this.selectedIndex].text);
        });
    });
