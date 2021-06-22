$(window).on('load', function(){
    let alert_messages = document.querySelectorAll('.alert-message');
    let alert_close_icons = document.querySelectorAll('.alert-message>.close');
    if(alert_messages){
        alert_messages.forEach((alert_message) => {
            setTimeout(function() {
                alert_message.style.opacity = 1;
            }, 200);
        })
    }
    if (alert_close_icons) {

        alert_close_icons.forEach((alert_close_icon) => {
            alert_close_icon.addEventListener('click', function () {
                this.closest('.alert-message').classList.add('close');

                this.closest('.alert-message').addEventListener('transitionend', function (event) {
                    if (event.propertyName == 'transform') {
                        this.remove();
                    }
                });
            });

            setTimeout(function() {
                alert_close_icon.closest('.alert-message').classList.add('close');

                alert_close_icon.closest('.alert-message').addEventListener('transitionend', function (event) {
                    if (event.propertyName == 'transform') {
                        this.remove();
                    }
                });
            }, 5000);
        });


    }
})