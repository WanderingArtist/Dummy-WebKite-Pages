// truncate descriptions after a certain point
$(document).ready(function(){
    var topResults = $('#piki_topResult');
    if (topResults.length){
        // less/more truncate on description text
        truncateTopResultDescriptions();
        
        //collapsible menu
        var collapseIcon = $('<span class="collapse-toggle"></span>');
        var toggleSections = $('.sidebar-group').not('#pref_location');
        var prefTitles = toggleSections.find('h4');
        prefTitles.closest('div').addClass('collapseable').end().append(collapseIcon);
        toggleSections.on('click', 'h4', function(){
          $(this).toggleClass('open').siblings('.section').slideToggle(function(){
            $(this).css('overflow', 'visible');
          });
        });
        
        $(webkite).on("PaginationChangeTopResultsLoaded", function(){
            //truncate new result descriptions
            truncateTopResultDescriptions();
        });
        
        $(webkite).on("PreferenceChangeTopResultsLoaded", function(){
            //truncate new result descriptions
            truncateTopResultDescriptions();
        });
    }
    
});