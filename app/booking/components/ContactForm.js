'use client';

import React, { useState } from 'react';
import { User, Phone, Mail } from 'lucide-react';

const validators = {
  name: (v) => (v.trim().length >= 2 ? '' : '이름을 2자 이상 입력해주세요'),
  phone: (v) => (/^01[016789]-?\d{3,4}-?\d{4}$/.test(v.replace(/\s/g, '')) ? '' : '올바른 전화번호를 입력해주세요'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : '올바른 이메일 주소를 입력해주세요'),
};

export default function ContactForm({ contactInfo, onChangeContact, onSubmit }) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (field, value) => {
    onChangeContact({ ...contactInfo, [field]: value });
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validators[field](value) }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validators[field](contactInfo[field] || '') }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    for (const field of ['name', 'phone', 'email']) {
      newErrors[field] = validators[field](contactInfo[field] || '');
    }
    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true });

    if (Object.values(newErrors).every((e) => e === '')) {
      onSubmit();
    }
  };

  const fields = [
    { key: 'name', label: '이름', placeholder: '홍길동', icon: User, type: 'text' },
    { key: 'phone', label: '전화번호', placeholder: '010-1234-5678', icon: Phone, type: 'tel' },
    { key: 'email', label: '이메일', placeholder: 'example@email.com', icon: Mail, type: 'email' },
  ];

  return (
    <div className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
      <h3 className="text-lg font-bold text-white mb-6">연락처 정보를 입력해주세요</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        {fields.map(({ key, label, placeholder, icon: Icon, type }) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
            <div className="relative">
              <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type={type}
                value={contactInfo[key] || ''}
                onChange={(e) => handleChange(key, e.target.value)}
                onBlur={() => handleBlur(key)}
                placeholder={placeholder}
                className={`w-full pl-12 pr-4 py-3.5 bg-gray-800/50 rounded-xl text-white placeholder-gray-600 outline-none transition-all duration-200 border ${
                  touched[key] && errors[key]
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-gray-700 focus:border-orange-500'
                }`}
              />
            </div>
            {touched[key] && errors[key] && (
              <p className="mt-1.5 text-sm text-red-400">{errors[key]}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-orange-900/30 mt-4"
        >
          다음 단계
        </button>
      </form>
    </div>
  );
}
