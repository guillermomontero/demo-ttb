<template>
  <section class="flex-auto md:bg-slate-200">
    
    <div class="container mx-auto py-5 px-4 md:py-10">

      <h2 class="text-xl font-extrabold text-center mb-5 md:mb-8">{{ $t('userRegistration') }}</h2>
      
      <form class="md:px-6 md:pt-5 md:pb-6 md:mb-8 bg-white md:shadow-sm">

        <div class="px-5 py-4 mb-5 bg-green-200 text-green-600 shadow-sm">
          {{ $t('registrationSuccessful') }}
        </div>
        <div class="px-5 py-4 mb-5 bg-red-200 text-red-700 shadow-sm">
          {{ $t('signInErrorOccurred') }}
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-6">
          <div class="flex flex-col">
            <label for="inputEmail" class="font-semibold text-gray-500 mb-2">{{ $t('email') }}</label>
            <input type="email" class="input" id="inputEmail">
          </div>
          <div class="flex flex-col">
            <label for="inputPassword" class="font-semibold text-gray-500 mb-2">{{ $t('password') }}</label>
            <input type="password" class="input" id="inputPassword">
          </div>
          <div class="flex flex-col">
            <label for="inputPasswordConfirm" class="font-semibold text-gray-500 mb-2">{{ $t('confirmPassword') }}</label>
            <input type="password" class="input" id="inputPasswordConfirm">
          </div>
        </div> 
         
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 mb-6">
          <div class="flex flex-col">
            <label for="inputName" class="font-semibold text-gray-500 mb-2">{{ $t('name') }}</label>
            <input type="text" class="input" id="inputName">
          </div>
          <div class="flex flex-col">
            <label for="inputSurname" class="font-semibold text-gray-500 mb-2">{{ $t('surname') }}</label>
            <input type="text" class="input" id="inputSurname">
          </div>
        </div> 

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 mb-6">
          <div class="flex flex-col">
            <label for="inputPhone" class="font-semibold text-gray-500 mb-2">{{ $t('phone') }}</label>
            <input type="tel" class="input" id="inputPhone">
          </div>
          <div class="flex flex-col">
            <label for="selectCountry" class="font-semibold text-gray-500 mb-2">{{ $t('country') }}</label>
            <select class="input" id="selectCountry">
              <option>{{ $t('chooseAnOption') }}</option>
            </select>
          </div>
        </div> 
         
        <div class="flex items-baseline lg:items-center mb-6">
          <div class="pt-1 lg:p-0 lg:flex lg:items-center">
           <input type="checkbox" class="w-3 h-3 lg:w-4 lg:h-4" id="conditionsCheck" /> 
          </div>
          <label for="conditionsCheck" class="ml-2 text-sm">{{ $t('privacyPolicySentence') }} <a href="privacy-policy" class="link">{{ $t('privacyPolicy') }}</a> {{ $t('and') }} <a href="terms-and-conditions" class="link">{{ $t('termsAndConditions') }}</a> {{$t('ofTeeTimesBookingPortal') }}</label>
        </div>

        <div class="text-center mb-6 md:m-0">
          <BaseButton
            :label="$t('register')"
            width="w-40"
          />
        </div>
        
      </form> 

    </div>

  </section>
</template>

<script>
export default {

  mounted() {
    
  }

}
</script>