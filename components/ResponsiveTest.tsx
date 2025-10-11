"use client";

export default function ResponsiveTest() {
  return (
    <div className="root-layout">
      <div className="space-y-8">
        {/* Header Test */}
        <section className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Responsive Test Page</h1>
          <p className="text-base sm:text-lg text-light-100">Testing mobile responsiveness across different screen sizes</p>
        </section>

        {/* Grid Test */}
        <section className="interviews-section">
          <div className="card-interview">
            <h3 className="text-lg sm:text-xl font-semibold">Card 1</h3>
            <p className="text-sm sm:text-base text-light-100">This card should stack on mobile and show in grid on larger screens.</p>
          </div>
          <div className="card-interview">
            <h3 className="text-lg sm:text-xl font-semibold">Card 2</h3>
            <p className="text-sm sm:text-base text-light-100">Testing responsive grid layout behavior.</p>
          </div>
          <div className="card-interview">
            <h3 className="text-lg sm:text-xl font-semibold">Card 3</h3>
            <p className="text-sm sm:text-base text-light-100">Should be fully responsive across all devices.</p>
          </div>
        </section>

        {/* Button Test */}
        <section className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
          <button className="btn-upload">Upload Button</button>
        </section>

        {/* Form Test */}
        <section className="max-w-md mx-auto">
          <div className="form space-y-4">
            <div>
              <label className="label">Test Input</label>
              <input className="input" placeholder="Test responsive input" />
            </div>
            <button className="btn">Submit Test</button>
          </div>
        </section>

        {/* Breakpoint Indicators */}
        <section className="text-center space-y-2">
          <div className="block sm:hidden text-red-400 font-bold">📱 Mobile View (< 640px)</div>
          <div className="hidden sm:block md:hidden text-yellow-400 font-bold">📱 Small Tablet (640px - 768px)</div>
          <div className="hidden md:block lg:hidden text-blue-400 font-bold">💻 Tablet (768px - 1024px)</div>
          <div className="hidden lg:block xl:hidden text-green-400 font-bold">🖥️ Desktop (1024px - 1280px)</div>
          <div className="hidden xl:block text-purple-400 font-bold">🖥️ Large Desktop (> 1280px)</div>
        </section>
      </div>
    </div>
  );
}