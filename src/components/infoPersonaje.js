const tailwindSheet = new CSSStyleSheet();
// Load your Tailwind CSS
fetch('../css/output.css')
  .then(response => response.text())
  .then(css => {
    tailwindSheet.replaceSync(css);
  });




class InfoPersonaje extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [tailwindSheet];
        this.render();
    }
    render() {
    this.shadowRoot.innerHTML = `
     <style>
        @import '../css/output.css';
      </style>
      
    <div class="bg-white rounded-lg shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-4 text-indigo-700 border-b pb-2">Información del Personaje</h2>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 font-medium mb-1" for="name">Nombre:</label>
                      <label type="text" id="name" class="block text-gray-400 font-medium mb-1" > fdafdsa</label>
                    </div>
                    
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 font-medium mb-1" for="job">Oficio:</label>
                      <input type="text" id="job" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>
                    
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 font-medium mb-1" for="martialStyle">Estilo Marcial:</label>
                      <input type="text" id="martialStyle" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>
                    
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 font-medium mb-1" for="race">Raza:</label>
                      <input type="text" id="race" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>
                    
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 font-medium mb-1" for="level">Nivel:</label>
                      <input type="number" id="level" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>
                    
                    <div class="col-span-2">
                      <label class="block text-gray-700 font-medium mb-1" for="background">Trasfondo:</label>
                      <textarea id="background" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                    </div>
                  </div>
                </div>
      
    
    `;
    }
}

customElements.define('info-personaje', InfoPersonaje);