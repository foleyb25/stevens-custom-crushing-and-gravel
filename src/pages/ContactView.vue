<template>
  <div
    id="content-container"
    class="w-full bg-white p-8"
  >

    <div id="contact-info">
      <h1 class="text-4xl font-bold underline">Call or Email For a Quote</h1>
      <h3 class="text-2xl mt-8">Stevens Custom Crushing & Gravel</h3>
      <address>Cascade MT</address>
      <a class="text-blue-500 underline" href="tel:406-920-0740">406-920-0740</a><br>
      <a class="text-blue-500 underline" href="mailto:Zack@StevenCrushing.com">Zack@stevensgravel.com</a>
    </div>
    <form
      ref="form"
      v-if="!messageStatus"
      @submit.prevent="sendEmail()"
      class="bg-white p-6 rounded-md shadow-md mt-24"
    >
      <div class="mb-4 text-xl">
        <label for="subject" class="block text-3xl font-medium text-gray-600"
          >Subject</label
        >
        <input
          v-model="subject"
          type="subject"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div class="mb-4 text-xl">
        <label for="message" class="block text-3xl font-medium text-gray-600"
          >Message</label
        >
        <textarea
          v-model="message"
          id="message"
          name="message"
          rows="4"
          placeholder="Your message..."
          required
          class="mt-1 p-2 w-full border rounded-md"
        ></textarea>
      </div>
      <div class="mb-4 text-xl">
        <label for="email" class="block text-3xl font-medium text-gray-600"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="example@example.com"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div class="mb-4 text-xl">
        <label for="firstName" class="block text-3xl font-medium text-gray-600"
          >First Name</label
        >
        <input
          v-model="firstName"
          id="firstName"
          name="firstName"
          placeholder="John"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div class="mb-4 text-xl">
        <label for="lastName" class="block text-3xl font-medium text-gray-600"
          >Last Name</label
        >
        <input
          v-model="lastName"
          id="lastName"
          name="lastName"
          placeholder="Doe"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div class="mb-4 text-xl">
        <label for="phone" class="block text-3xl font-medium text-gray-600"
          >Phone Number</label
        >
        <input
          v-model="phone"
          id="phone"
          name="phone"
          placeholder="555-555-5555"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div class="mb-4 text-xl">
        <label for="address" class="block text-3xl font-medium text-gray-600"
          >Address</label
        >
        <input
          v-model="address"
          id="address"
          name="address"
          placeholder="123 Airport Drive"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div class="mb-4 hidden">
        <label
          for="middle-name"
          class="block text-3xl font-medium text-gray-600"
        ></label>
        <textarea
          v-model="middleName"
          id="middleName"
          rows="4"
          placeholder="Your message..."
          class="mt-1 p-2 w-full border rounded-md"
        ></textarea>
      </div>
      <button
        :disabled="processingRequest"
        type="submit"
        class="bg-black hover:bg-gray-500 hover:text-black text-3xl text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-300"
      >
        Submit
      </button>
    </form>
    <div v-else class="w-full flex justify-center">
      <div class="bg-green-100 p-6 rounded-md shadow-md w-1/2 m-48">
        <div class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <div>
            <h2 class="text-6xl font-semibold text-green-700">Success!</h2>
            <p class="text-2xl text-green-600">
              Your message has been sent. We'll get back to you soon!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24 w-full h-8"></div>
  </div>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { ref, onMounted } from "vue";

const form = ref(null);
const email = ref("");
const firstName = ref("");
const lastName = ref("");
const message = ref("");
const phone = ref("");
const address = ref("");
const subject = ref("");
const middleName = ref("");

const sendEmail = async () => {
  if (middleName.value !== "") return;
  try {
    emailjs.sendForm(
      "service_num0ioa",
      "template_8a9kabr",
      form.value,
      "WfyseC3f3dX2Odrir",
      {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value,
        subject: subject.value,
        phone: phone.value,
        address: address.value,
      },
    );
  } catch (error) {
    console.log({ error });
  }
  // Reset form field
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  message.value = "";
  subject.value = "";
  phone.value = "";
  address.value = "";
};

onMounted(() => {
  window.scrollTo(0,0);
})
</script>

<style lang="scss" scoped></style>
