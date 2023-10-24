/*
    Assignment 05
*/
$(document).ready(function()
{
    class ContentItem 
    {
        Id;
        Name;
        Description;
        Category;

        constructor(Id,Name,Description,Category) 
        {
            this.Id = Id;
            this.Name = Name;
            this.Description = Description;
            this.Category = Category;
        }
        updateContentItem(Id,Name,Description,Category) 
        {
            if((this.Id == Id)&&(Name != null)&&(Description != null)&&(Category != null))
            {
                this.Name = Name;
                this.Description = Description;
                this.Category = Category;
            }
        }
        toString() 
        {
            return `<div id="content-item-${this.Id}" class="content-item-wrapper">
                        <h2>${this.Name}</h2>
                        <p>${this.Description}</p>
                        <div>${this.Category}</div>
                    </div>`;
        }
    }
    
    let contentItems=
        [
            new ContentItem(0,'Dodge','Dodge is an American brand of automobiles and a division of Stellantis North America, based in Auburn Hills, Michigan.','Automative'),
            new ContentItem(1,'BMW','The first car sold as a BMW was a rebadged Dixi called the BMW 3/15, following BMW acquisition of the car manufacturer Automobilwerk Eisenach.','Automative'),
            new ContentItem(2,'Tesla','Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas, which designs and manufactures electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services','Electric vehicle'),
            new ContentItem(3,'Mercedes','Mercedes-Benz traces its origins to Karl Benz first internal combustion engine in a car, seen in the Benz Patent Motorwagen financed by Bertha Benz dowry and patented in January 1886 and Gottlieb Daimler and their engineer Wilhelm Maybach conversion of a stagecoach, with the addition of a petrol engine, introduced later that year.','Automative'),
            new ContentItem(4,'Porche', 'The Porsche 64 was developed in 1939 using many components from the Beetle.','Automobile')
        ];

    contentItems.forEach(function(i) 
    {
        let contentItemEach = i.toString();
        $("#content-item-list").append(contentItemEach);
    });

    $('#theme-name').text('Cars Theme');

    $('.content-item-wrapper').css(
        {
            'border':'2px solid black',
            'width':'85%',
            'padding':'10px',
            'margin':'auto 2px'
        }
    );

    const updatebutton=$('<button>Update Successfully</button>');
    $(updatebutton).click(function() 
    {
        contentItems[0].updateContentItem(0,'Audi','Automobile company Wanderer was originally established in 1885, later becoming a branch of Audi AG. Another company, NSU, which also later merged into Audi, was founded during this time, and later supplied the chassis for Gottlieb Daimler four-wheeler.','Automotive');
        $('#content-item-0').html(contentItems[0].toString());
    });

    const unsuccessfully =$('<button>Update Unsuccessfully</button>');

    $(unsuccessfully).click(function() 
    {
        contentItems[0].updateContentItem(1,'Taunted','Other name for Rapunzel','Love');

        $('#content-item-0').html(contentItems[0].toString());
    });
    
    $('#content').append(updatebutton);
    $('#content').append(unsuccessfully);
});


