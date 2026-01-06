import React from 'react';

interface GlossyButtonProps{
    children?: React.ReactNode;
    onClick?:()=>void;
    disabled?: boolean;
}

const GlossyButton: React.FC<GlossyButtonProps> = ({ children = "Start", onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="relative px-12 py-4 text-xl font-semibold text-gray-700 rounded-full shadow-lg border-2 border-[#85d8db] transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
      style={{
        textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)',
        background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 48%, #d1d5db 52%, #d1d5db 100%)'
      }}
    >
      {/* Sharp glossy highlight on top half only */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          top: 0, 
          height: '48%',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)'
        }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GlossyButton;