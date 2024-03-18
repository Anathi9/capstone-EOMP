<template>
    <footer class="footer">
    <div class="container ">
        <div class="footer-columns">
            <div class="footer-column">
                <h4>Welcome to Sparkle Clean</h4>
                <p>Your one stop shop for all  cleaning chemical needs<br><br><br>Improving and striving for the best in chemical cleaning technology</p>

            </div>
            <div class="footer-column">
                <h4>Company Details</h4>
                <p>31750 Nkcazo Street, Khayelitsha,</p>
                <p>Operating Hours:<br> Mon-Frid 9AM-8PM <br> Sat-Sun 10AM-5PM</p>
               

            </div>
            <div class="footer-column">
                <h4>FAQ & About Us</h4>
                <p>Frequently Asked Questions</p>
                <br>
                <p>About Us: Learn more about our company and mission.</p>
            </div>
        </div>
    </div>
</footer>
</template>
<script>

export default{
    name:"FooterComp",
}
</script>
<style>
.footer {
            background-color:indigo;
            color: #fff;
            padding: 5px 0;
            text-align: center;
            position:relative
          
        }

        .footer-columns {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .footer-column {
            flex: 0 0 calc(33.33% - 20px);
            margin: 10px;
        }

        .footer-column h4 {
            font-size: 17px;
            margin-bottom: 15px;
        }

        .footer-column p {
            font-size: 13px;
        }
        @media only screen and (max-width: 767px) {
            .footer-column h4 {
                font-size: 14px; 
            }

            .footer-column p {
                font-size: 8px;
            }
        }

       
</style>