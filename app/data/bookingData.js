export const plans = {
  beginner: {
    id: 'beginner',
    name: '초급클래스 (4시간)',
    price: '₩100,000',
    description: 'AI 이미지 생성의 기초를 배우는 입문자를 위한 클래스',
    color: 'from-gray-600 to-gray-700',
    buttonStyle: 'bg-gray-800 text-white hover:bg-gray-700',
  },
  intermediate: {
    id: 'intermediate',
    name: '중급클래스',
    price: '₩250,000',
    description: '본격적인 창작 활동을 위한 심화 과정 클래스',
    color: 'from-orange-500 to-red-500',
    buttonStyle: 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90',
  },
  master: {
    id: 'master',
    name: '마스터클래스',
    price: '₩450,000',
    description: '팀과 기업을 위한 맞춤형 프리미엄 교육',
    color: 'from-gray-300 to-white',
    buttonStyle: 'bg-white text-black hover:bg-gray-200',
  },
};

export const timeSlots = [
  '10:00', '11:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '19:00',
];

export const coupons = {
  'TB1004': { discount: 20, label: '추천코드 20% 할인' },
  'WELCOME10': { discount: 10, label: '신규회원 10% 할인' },
  'TOOLBEE20': { discount: 20, label: 'TOOLBEE 20% 할인' },
  'EARLY30': { discount: 30, label: '얼리버드 30% 할인' },
  'VIP50': { discount: 50, label: 'VIP 50% 할인' },
};

export function getPlan(slug) {
  return plans[slug] || null;
}

export function getCoupon(code) {
  return coupons[code.toUpperCase()] || null;
}

export function parsePrice(priceStr) {
  return parseInt(priceStr.replace(/[₩,]/g, ''), 10);
}

export function formatPrice(num) {
  return `₩${num.toLocaleString()}`;
}
