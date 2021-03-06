$(document).ready(function() {
    let possibleTags = $(".project-item span.badge").map(function() {
        return this.innerText;
    });
    let uniqueTags = [...new Set(possibleTags)].sort();

    $("#project-search").tagInput({
        classNames: {
            overall: "tag-input form-control h-auto w-100",
            tag: "tag badge badge-secondary mr-1"
        },
        placeholderText: "Search Projects By Tag",
        useDefaultStyle: false,
        deleteWithBackspace: true,
        typeaheadjs: {
            classNames: {
                menu: "tt-menu form-control my-2 ml-n2 h-auto w-auto"
            },
            exactMatchOnly: true,
            datasets: [
                {
                    name: "tags",
                    source: function(query, callback) {
                        let matches = [];
                        let regex = RegExp(query, "i");

                        uniqueTags.forEach(tag => {
                            if (regex.test(tag)) {
                                matches.push(tag);
                            }
                        });

                        callback(matches);
                    }
                }
            ]
        }
    });

    $("#project-search").change(function() {
        let val = $(this).val();
        let searchTags = val == "" ? [] : val.split(",");

        if (searchTags.length > 0) {
            // There are tags to search by, so filter project items by them
            $(".project-item").each(function() {
                let elem = $(this);
                let tags = elem
                    .find("span.badge")
                    .map(function() {
                        return this.innerText;
                    })
                    .get();

                let result = true;
                searchTags.forEach(tag => (result = result && tags.includes(tag)));

                if (result) {
                    elem.show(); //.removeClass("hide");
                } else {
                    elem.hide(); //.addClass("hide");
                }
            });
        } else {
            // No tags to search by, so show all projects
            $(".project-item").each(function() {
                $(this).show(); //.removeClass("hide");
            });
        }
    });

    $('[data-toggle="tooltip"]').tooltip();
});
