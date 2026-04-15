export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold text-on-surface">OMH</div>
          <p className="text-on-surface/60 font-body text-sm tracking-wide">
            Built with ❤️ in Chennai by UNAI Tech.
          </p>
        </div>
        <div className="flex gap-8 font-body text-sm tracking-wide">
          {["Terms", "Privacy", "Careers", "Press"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-on-surface/60 hover:text-primary-container transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="text-on-surface/60 font-body text-sm tracking-wide">
          © 2024 OMH by UNAI Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
