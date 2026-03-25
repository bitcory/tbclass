'use client';

const reviews = [
  {
    name: '김수현',
    job: '디자이너',
    service: '카메라 가이드',
    title: '카메라 앵글의 차이를 확실히 이해했어요',
    description: '로우앵글과 하이앵글의 차이, 클로즈업의 감정 전달 효과 등 직접 이미지를 비교하면서 배울 수 있어 정말 좋았습니다. 미드저니 프롬프트에 바로 적용할 수 있어요.',
  },
  {
    name: '이준호',
    job: 'AI 아티스트',
    service: '조명 가이드',
    title: '조명 하나로 분위기가 완전히 달라지네요',
    description: '렘브란트 조명, 골든아워 등 전문 용어만 들어봤는데, 실제 예시와 함께 보니 확실히 이해됐어요. 프롬프트에 조명 키워드를 넣으니 퀄리티가 확 올라갔습니다.',
  },
  {
    name: 'Yuki Tanaka',
    job: '영상 크리에이터',
    service: '스타일 가이드',
    title: '다양한 아트 스타일을 한눈에 비교할 수 있어요',
    description: '디지털 페인팅, 수채화, 애니메 스타일 등 각각의 특징과 프롬프트를 정리해둬서 작업할 때 레퍼런스로 활용하기 딱 좋습니다.',
  },
  {
    name: '박지영',
    job: '웹툰 작가',
    service: '매체 가이드',
    title: '유화, 연필화 등 매체별 느낌을 잘 살릴 수 있게 됐어요',
    description: '각 매체의 질감과 특성을 프롬프트로 어떻게 표현하는지 배웠습니다. 실제 작업물의 퀄리티가 확 올라가서 감사해요.',
  },
  {
    name: '최민수',
    job: '프리랜서',
    service: '영상 가이드',
    title: '영상 프롬프트 작성이 훨씬 수월해졌어요',
    description: '팬, 틸트, 달리 등 카메라 무브먼트와 전환 효과를 체계적으로 배울 수 있었어요. AI 영상 생성할 때 원하는 결과를 훨씬 정확하게 얻을 수 있게 됐습니다.',
  },
  {
    name: 'Ana Kim',
    job: '콘텐츠 크리에이터',
    service: '튜토리얼',
    title: '체계적인 학습 과정이 인상적이었어요',
    description: '기초부터 고급 과정까지 단계별로 잘 구성되어 있어서, AI 이미지 생성을 처음 시작하는 분들에게 강력 추천합니다.',
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            수강생 후기
          </h2>
          <p className="text-lg md:text-xl text-zinc-500">
            AI TOOLBEE GUIDE를 활용한 수강생들의 생생한 후기를 확인하세요.
          </p>
        </div>

        {/* 3-column masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white/[0.03] rounded-2xl p-8 ring-1 ring-white/[0.06] hover:ring-emerald-500/20 hover:bg-white/[0.05] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] reveal"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-lg font-bold ring-1 ring-emerald-500/20">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-zinc-100">{review.name}</div>
                  <div className="text-sm text-zinc-500">{review.job}</div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-zinc-200 leading-relaxed">
                  <span className="text-emerald-400 font-bold">{review.service}</span>{' '}
                  {review.title}
                </h3>
              </div>

              <p className="text-zinc-500 leading-relaxed">
                {review.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
