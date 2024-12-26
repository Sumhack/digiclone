// src/components/Demo.tsx
const Demo = () => {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Live Demo</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Try DigiClone AI
            </p>
          </div>
          
          <div className="w-full">
            <iframe
              src="https://huggingface.co/spaces/sumhack/clonit"
              className="w-full h-[600px] border-0 rounded-lg shadow-lg"
              title="DigiClone AI Demo"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Demo;