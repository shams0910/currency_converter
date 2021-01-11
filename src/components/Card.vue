<template>
    <div class="container">
        <p class="first__row">
            {{this.inp}} <span>{{this.to}} </span> =
        </p>
        <p class="second__row">
            {{this.outp}}  <span>{{this.for}} </span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        to : {required: true},
        for: {required: true},
        inp : {required: true},
        outp: {required: true}
    },
    data() {
        return {
            
        }
    },

}
</script>

<style scoped>
    .container{
        padding: 1.7rem;
        margin: .3rem;
        min-width: 40%;
        height : auto;
        background-color: #fff;
        box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);
border-radius: 12px;
    }
    .first__row{
        font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.0171429px;

color: #2B2D33;
    }
     .first__row span{
       font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.0171429px;

color: #B9B9B9;
    }
    .second__row{
        font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 56px;
letter-spacing: 0.0342857px;

color: #2B2D33;

    }
    .second__row span{
        font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.0171429px;

color: #2B2D33;
    }

    @media only screen and (max-width: 768px) {
            .container{
        padding: 1.7rem;
        margin: .3rem;
        min-width: 80%;
        height : auto;
        background-color: #fff;
        box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);
border-radius: 12px;
    }
    .first__row{
        font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.0171429px;

color: #2B2D33;
    }
     .first__row span{
       font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.0171429px;

color: #B9B9B9;
    }
    .second__row{
        font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 56px;
letter-spacing: 0.0342857px;

color: #2B2D33;

    }

    }
</style>