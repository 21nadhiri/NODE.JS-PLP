  // script.js
  document.addEventListener('DOMContentLoaded', function (){
    fetch('/nodejs_info.json')
    .then(response => response.json())
    .then(data => {
        const infoTableBody = document.getElementById('infoTableBody');
        data.forEach((item, index)=> {
            const row = `
            <tr>
                <th scope="row" >${index + 1}</th>
                <td>${item.topic}</td>
                <td>${item.description}</td>
            </tr>`;

            infoTableBody.innerHTML += row;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
  });