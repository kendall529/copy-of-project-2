//queryselector that finds if the element has a deleteButton class and does a delete to the group id
document.querySelector("#user-group-list").addEventListener("click", async function deleteGroupHandler(event) {
    const element = event.target;
    if(element.matches('.deleteButton')) {
      const id = element.getAttribute('data-id');
      const response = await fetch(`/api/groups/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        location.reload();
      } else {
        alert(response.statusText);
      }
    }
  });