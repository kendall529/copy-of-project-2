//drop down lists all users and enrolls the user into the group
document.querySelector("#user-group-list").addEventListener("click", async function unenrollHandler(event) {    
    var element = event.target;
  
    if (element.matches(".exitButton")) {//checks if element clicked on has add-user class
          var study_group_id = element.id.substring(11);//removes text from id to get id number
          if (study_group_id) {
              const response = await fetch(`/api/enrollments/${study_group_id}`, {//post fetch to enrollment api
                method: 'DELETE',
                // body: JSON.stringify({ study_group_id }),
                headers: { 'Content-Type': 'application/json' },
              });
              if (response.ok) {
                location.reload();
              } else {
                alert(response.statusText);
              }
          }
      }  
    });
  