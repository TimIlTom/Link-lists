let sitesLinks = [];

let addNewListElement = function(event){

  event.preventDefault();

  let lisElementUrl = $("#form-url").val();
  let lisElementTitle = $("#form-title").val();
  let lisElementCtaegory = $("#form-category").val();

  let site = {

    url: lisElementUrl,
    title: lisElementTitle,
    category: lisElementCtaegory,
  }

  sitesLinks.push(site);
  console.log(sitesLinks);
  createNewLink(sitesLinks);
}

let createNewLink = function(links){

    const aElem = $("<a>").attr("href",links[links.length - 1].url).text(links[links.length - 1].title);

    const listElement = $("<li>").append(aElem);
    $("#list").append(listElement);
}

let init = function(){

  $("form").submit(addNewListElement)
}

$(document).ready(init);