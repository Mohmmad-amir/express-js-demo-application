let peopleTable = $("#peopleTable")

let people = []

$(document).ready(() => {
    /*
    * setup get method for fetch all data
    * from database
     */
    axios.get("/api/persons")
        .then(response => {
            let { data } = response
            // console.log(data);
            people = data
            people.map(person => {
                peopleTable.html(peopleTable.html() + `<tr>${makeTrContent(person)}</tr>`)
            });
        })
        .catch(err => console.log(err))
    /*
    * make table row(tr) content for get people data
    * in a table from database with axios
    */
    const makeTrContent = peopleTr => {
        return `
        <td>${peopleTr._id}</td>
        <td>${peopleTr.name}</td>
        <td>
        <button data-bs-toggle="modal" data-bs-target="#bookModal" onclick="editBook(this,${peopleTr._id})" class="btn btn-warning btn-sm">Edit <i class="fa-solid fa-pen-to-square"></i></button>
        </td>
        <td>
        <button data-bs-toggle="modal" data-bs-target="#bookModal" onclick="showData(this,${peopleTr._id})" class="btn btn-warning btn-sm">Show <i class="fa-solid fa-binoculars"></i></button>
        </td>
        <td>
        <button onclick="deletePerson(this,${peopleTr._id})" class="btn btn-danger btn-sm">Delete <i class="fa-solid fa-trash"></i></button>
        </td>
        `
    }
})

/*
* setup delete method for delete one data
* from database
 */

const deletePerson = (elm, id) => {
    axios.delete(`api/persons/${id}`)
        .then(({ data }) => {
            let { success, message } = data;
            if (success) {
                elm.parentElement.parentElement.remove()
                people = people.filter(person => person.id != id)
                // console.log(books)
            }
            else {
                alert(message)
            }
        })
        .catch(err => console.log(err))
}