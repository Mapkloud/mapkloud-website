<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="container-custom">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gradient">MapKloud</h1>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-8">
            <a
              href="#about"
              class="text-gray-700 hover:text-blue-600 transition-colors"
              >About</a
            >
            <a
              href="#services"
              class="text-gray-700 hover:text-blue-600 transition-colors"
              >Services</a
            >
            <a
              href="#contact"
              class="text-gray-700 hover:text-blue-600 transition-colors"
              >Contact</a
            >
          </div>

          <!-- Language Toggle -->
          <div class="flex items-center space-x-2">
            <button class="text-sm text-gray-600 hover:text-blue-600">
              TR
            </button>
            <span class="text-gray-400">|</span>
            <button class="text-sm text-blue-600 font-medium">EN</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      class="section-padding bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Maximize the Power of Technology with
            <span class="text-gradient">Digital Transformation</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            MapKloud transforms your business processes with digital
            transformation and technology consulting. By maximizing the power of
            technology with modern solutions and comprehensive support, we
            enhance your efficiency.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary">Learn More</button>
            <button class="btn-secondary">Our Services</button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Address of Modern Solutions!
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            At MapKloud, we offer a wide range of services in digital
            transformation and technology. We work to facilitate businesses'
            transition to modern infrastructures and help them make the most of
            the opportunities technology provides.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p class="text-lg text-gray-600">
            Comprehensive technology consulting and digital transformation
            solutions
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Service Card 1 -->
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Comprehensive Orchestration and Management Consulting
            </h3>
            <p class="text-gray-600">
              We provide design, deployment, and optimization services in
              Kubernetes, OpenShift, and multi-cloud architectures.
            </p>
          </div>

          <!-- Service Card 2 -->
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Cloud Transformation and Management Consulting
            </h3>
            <p class="text-gray-600">
              We deliver secure and scalable solutions by providing cloud
              strategy, migration, and deployment services on AWS, Azure, and
              GCP.
            </p>
          </div>

          <!-- Service Card 3 -->
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              IoT Integration and Solution Consulting
            </h3>
            <p class="text-gray-600">
              We ensure the secure and efficient management of your IoT devices
              by connecting them to cloud systems.
            </p>
          </div>

          <!-- Service Card 4 -->
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Technology Consulting and Support Services
            </h3>
            <p class="text-gray-600">
              We address your corporate needs in information technology and
              software, supporting your transition to the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch with Us!
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Ready to start your new project with us? Awesome! You can email us,
            and we'll get back to you as soon as possible!
          </p>
          <button class="btn-primary">Contact Us</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container-custom">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4">MapKloud</h3>
          <p class="text-gray-400 mb-6">
            Technology Consulting & Digital Transformation
          </p>
          <div class="flex justify-center space-x-6">
            <a href="#" class="text-gray-400 hover:text-white transition-colors"
              >LinkedIn</a
            >
            <a href="#" class="text-gray-400 hover:text-white transition-colors"
              >Twitter</a
            >
            <a href="#" class="text-gray-400 hover:text-white transition-colors"
              >Email</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
