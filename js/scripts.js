  
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(document).ready(function () {
        $("#mycarousel").carousel({ interval: 2000 });
        $("#carousel-pause").click(function () {
            $("#mycarousel").carousel('pause');
        });
        $("#carousel-play").click(function () {
            $("#mycarousel").carousel('cycle');
        });
    });

    $("#myButton").click(function () {
        $("#myModal").show();
    });

    // Close the modal when the close button or outside the modal is clicked
    $(".close, .modal").click(function () {
        $("#myModal").hide();
    });

    // Prevent the modal from closing when clicking inside the modal content
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });

    $(document).ready(function () {
        $('#loginLink').click(function () {
            // Hiển thị cửa sổ pop-up
            $('#loginModal').show();
        });

        // Đóng cửa sổ pop-up khi nhấp chuột ra ngoài
        $(document).click(function (event) {
            if ($(event.target).is('#loginModal')) {
                $('#loginModal').hide();
            }
        });

        // Đóng cửa sổ pop-up khi nhấp vào nút đóng
        $('.close').click(function () {
            $('#loginModal').hide();
        });
    });
