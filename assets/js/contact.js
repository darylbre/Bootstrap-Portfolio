
     $("#send").on("click", function(e) {
       e.preventDefault();
       console.log('buttonhasbeenclicked');
       const name = encodeURI($("#name").val());
       const email = encodeURI($("#email").val());
       const phone = encodeURI($("#phone").val());
       const message = encodeURI($("#message").val());
       const subject = encodeURI(`${name} has viewed your Portofolio!`);

       const hrefText = `mailto:roderickbreland@gmail.com?&subject=${subject}&body=${message}`;
       window.location.href = hrefText;

     });