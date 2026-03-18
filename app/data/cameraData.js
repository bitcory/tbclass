// Extended Camera & Visual Guide Data
export const cameraData = {
    // ============= FRAMEWORK INFO =============
    // 강사 소개
    'instructor-intro': {
        title: '강사 소개',
        koreanTitle: 'Instructor Introduction',
        instructorInfo: {
            name: '김진욱 (툴비)',
            position: 'AI TOOLBEE',
            company: [
                '아이크루 대표, (주)알앤픽 대표이사, (주)제이콥소프트 영업대표',
            ],
            email: 'aitoolbee79@gmail.com',
            image: '/images/instructor.png'
        },
        description: 'AI 기술과 창의적 콘텐츠 제작 분야의 전문가로, 다년간의 경험을 바탕으로 AI툴비를 만들게 되었습니다.',
        usage: [
            'AI TOOLBEE 웹페이지 개발',
            'AIFI 프레임워크 개발',
            'AI관련 바이브코딩, 자동화개발 경력보유',
            'AI 이미지/영상 생성 전문가',
            'EBS 디지털영상제작 강의, 기업특강, 팀단위 특강',
        ],
        images: [
            { src: '/images/guide/toolb/instructor-intro-1.jpg', caption: 'instructor intro example 1', prompt: 'AI TOOLBEE feature demonstration 1, tool interface showcase, modern UI design, professional quality, informative visual' }
        ],
    },

    'instructor-reviews': {
        title: '강의 후기',
        koreanTitle: 'Course Reviews',
        type: 'reviews',
        images: [
            { src: '/images/gang1.jpg', caption: 'EBS 특별강의', prompt: 'EBS 특별강의 현장, 전문 강사가 대형 스크린 앞에서 AI 기술 설명, 교육 환경, documentary photography' }
        ],
        description: 'AI TOOLBEE 강의를 수강하신 분들의 생생한 후기입니다.'
    },

    // AI툴박스툴
    'aifi-tool': {
        title: 'AI툴박스툴',
        koreanTitle: 'AI Image & Video Prompt Generator',
        type: 'tool',
        description: 'Gemini AI를 활용한 이미지 및 영상 프롬프트 생성 도구',
        images: [
            { src: '/images/guide/toolb/aifi-tool-1.jpg', caption: 'aifi tool example 1', prompt: 'AI TOOLBEE feature demonstration 1, tool interface showcase, modern UI design, professional quality, informative visual' }
        ],
    },

    // 바나나만들기 - 마법의프롬프트
    'banana-magic': {
        title: '마법의프롬프트',
        koreanTitle: 'Nano Banana AI Image Editor',
        type: 'tool',
        description: '나노바나나를 이용한 올인원 이미지 편집기',
        usage: [
            '이미지 생성: 텍스트 프롬프트로 새로운 이미지 생성',
            '이미지 편집: 기존 이미지를 텍스트로 편집',
            '이미지 합성: 두 이미지를 합성하여 새로운 이미지 생성'
        ],
        images: [
            { src: '/images/guide/practice/banana-magic-1.jpg', caption: 'banana magic example 1', prompt: 'banana magic practice exercise example 1, creative project demonstration, step-by-step visual guide, educational content, clear composition' }
        ],
    },

    // ============= CAMERA SHOTS =============
    // Shot Size
    'extreme-closeup': {
        title: '익스트림 클로즈업(Extreme Close-up)',
        koreanTitle: '익스트림 클로즈업',
        prompt: 'extreme close-up',
        description: '눈, 입술 등 인물의 특정 신체 부위나 사물의 디테일한 부분을 화면에 극도로 크게 채우는 샷입니다.',
        usage: [
            '강렬한 감정을 극대화할 때',
            '이야기의 중요한 단서를 관객에게 명확히 보여줄 때',
            '극도의 긴장감을 조성할 때',
            '피사체의 세밀한 디테일을 강조할 때'
        ],
        images: [
            { src: '/images/guide/camera/extreme-closeup-1.jpg', caption: 'Eye extreme close-up', prompt: 'extreme close-up of a woman’s eye with vivid amber iris, individual eyelashes in sharp detail, light reflections in the pupil, shallow depth of field, macro photography, water droplet on lower lash, 8K' }
        ]
    },

    'closeup': {
        title: '클로즈업(Close-up)',
        koreanTitle: '클로즈업',
        prompt: 'close-up',
        description: '인물의 얼굴이 화면에 가득 차는 샷으로, 보통 어깨선 윗부분까지를 포함합니다.',
        usage: [
            '인물의 미세한 표정 변화와 감정을 전달할 때',
            '관객이 인물과 친밀감을 느끼게 할 때',
            '감정적으로 몰입하게 만들 때',
            '대화 장면에서 인물의 반응을 보여줄 때'
        ],
        images: [
            { src: '/images/guide/camera/closeup-1.jpg', caption: 'Portrait close-up', prompt: 'close-up portrait of a young woman with soft freckles, natural window light creating catchlights in her eyes, shallow depth of field, 85mm lens, warm skin tones, intimate emotional connection, photorealistic, 8K' }
        ]
    },

    'medium-shot': {
        title: '미디엄 샷(Medium Shot)',
        koreanTitle: '미디엄 샷',
        prompt: 'medium shot',
        description: '인물의 상반신(보통 허리 위)을 담는 샷입니다.',
        usage: [
            '가장 보편적으로 사용되는 샷',
            '인물의 표정과 손동작(제스처)을 함께 보여줄 때',
            '대화 장면에 가장 적합',
            '안정적인 느낌을 줄 때'
        ],
        images: [
            { src: '/images/guide/camera/medium-shot-1.jpg', caption: 'Standard medium shot', prompt: 'medium shot of a barista crafting latte art in a cozy cafe, waist-up framing, warm ambient light, steam rising from cup, professional lifestyle photography, shallow background blur, inviting atmosphere' }
        ]
    },

    'cowboy-shot': {
        title: '카우보이 샷(Cowboy Shot)',
        koreanTitle: '카우보이 샷',
        prompt: 'cowboy shot',
        description: '인물의 허벅지나 무릎 위까지를 담는 샷으로, 미디엄 샷과 풀 샷의 중간 단계입니다.',
        usage: [
            '인물의 행동과 자신감을 강조할 때',
            '표정을 놓치지 않으면서도 동작을 보여줄 때',
            '위풍당당한 느낌을 줄 때',
            '액션 장면의 준비 상태를 보여줄 때'
        ],
        images: [
            { src: '/images/guide/camera/cowboy-shot-1.jpg', caption: 'Classic cowboy shot', prompt: 'cowboy shot of a confident woman in tailored blazer, mid-thigh framing, urban rooftop background, golden hour backlight, fashion editorial photography, powerful stance, wind in hair, sharp focus' }
        ]
    },

    'full-shot': {
        title: '풀 샷(Full Shot)',
        koreanTitle: '풀 샷',
        prompt: 'full shot',
        description: '인물의 머리부터 발끝까지 전신을 모두 화면에 담는 샷입니다.',
        usage: [
            '인물의 전체적인 의상, 자세를 보여줄 때',
            '신체를 이용한 큰 동작을 보여줄 때',
            '인물과 배경의 관계를 설명하기 시작할 때',
            '캐릭터의 전체적인 모습을 소개할 때'
        ],
        images: [
            { src: '/images/guide/camera/full-shot-1.jpg', caption: 'Full body shot', prompt: 'full shot of a ballet dancer in white tutu performing arabesque, head to toe framing, studio spotlight casting elegant shadow on wooden floor, graceful form, fine art dance photography, 8K' }
        ]
    },

    'wide-shot': {
        title: '와이드 샷(Wide Shot)',
        koreanTitle: '와이드 샷',
        prompt: 'wide shot',
        description: '인물과 함께 주변 환경을 충분히 보여주는 샷입니다.',
        usage: [
            '인물과 배경의 관계를 보여줄 때',
            '공간의 규모를 전달할 때',
            '고립감이나 외로움을 표현할 때',
            '장면 전체의 분위기를 설정할 때'
        ],
        images: [
            { src: '/images/guide/camera/wide-shot-1.jpg', caption: 'Wide landscape', prompt: 'wide shot of a lone surfer walking toward ocean waves at sunrise, small figure against vast beach landscape, golden morning light, environmental storytelling, cinematic atmosphere, contemplative mood' }
        ]
    },

    'extreme-wide': {
        title: '익스트림 와이드(Extreme Wide Shot)',
        koreanTitle: '익스트림 와이드 샷',
        prompt: 'extreme wide shot',
        description: '매우 넓은 범위를 보여주는 샷으로, 인물이 점처럼 작게 보이거나 아예 보이지 않을 수도 있습니다.',
        usage: [
            '광활한 공간감을 표현할 때',
            '인간의 왜소함을 강조할 때',
            '영화의 시작이나 새로운 장소를 소개할 때',
            '웅장한 스케일을 보여줄 때'
        ],
        images: [
            { src: '/images/guide/camera/extreme-wide-1.jpg', caption: 'Vast landscape', prompt: 'extreme wide shot of a tiny mountaineer on vast snowy peak ridge, epic Himalayan landscape, dramatic cloud formations, sense of human scale against nature, landscape photography, breathtaking grandeur, 8K' }
        ]
    },

    // Camera Angles
    'eye-level': {
        title: '아이 레벨(Eye Level)',
        koreanTitle: '아이 레벨',
        prompt: 'eye level',
        description: '피사체와 카메라가 같은 높이에 위치하는 가장 자연스러운 앵글입니다.',
        usage: [
            '중립적이고 객관적인 시선을 제공할 때',
            '관객과 인물 사이의 동등한 관계를 만들 때',
            '일상적인 대화나 상황을 보여줄 때',
            '편안하고 친근한 느낌을 줄 때'
        ],
        images: [
            { src: '/images/guide/camera/eye-level-1.jpg', caption: 'Neutral perspective', prompt: 'eye level portrait of a chef plating a dish in restaurant kitchen, natural height perspective, direct eye contact with camera, warm kitchen lighting, authentic working moment, lifestyle documentary style' }
        ]
    },

    'low-angle': {
        title: '로우 앵글(Low Angle)',
        koreanTitle: '로우 앵글',
        prompt: 'low angle',
        description: '카메라가 피사체보다 아래에 위치하여 위를 올려다보는 앵글입니다.',
        usage: [
            '피사체를 위엄 있고 강력하게 보이게 할 때',
            '영웅적인 인물을 표현할 때',
            '건물이나 구조물의 웅장함을 강조할 때',
            '위협적인 분위기를 조성할 때'
        ],
        images: [
            { src: '/images/guide/camera/low-angle-1.jpg', caption: 'Power perspective', prompt: 'low angle shot looking up at a confident businesswoman in glass skyscraper lobby, powerful imposing perspective, geometric ceiling lines converging, corporate authority, dramatic upward composition, cinematic lighting' }
        ]
    },

    'high-angle': {
        title: '하이 앵글(High Angle)',
        koreanTitle: '하이 앵글',
        prompt: 'high angle',
        description: '카메라가 피사체보다 위에 위치하여 아래를 내려다보는 앵글입니다.',
        usage: [
            '피사체를 작고 약하게 보이게 할 때',
            '전체적인 상황을 조망할 때',
            '취약함이나 고립감을 표현할 때',
            '관찰자의 시점을 제공할 때'
        ],
        images: [
            { src: '/images/guide/camera/high-angle-1.jpg', caption: 'Looking down', prompt: 'high angle shot looking down at a little girl playing with paper boats in rain puddle, gentle vulnerability emphasized, colorful raincoat and yellow boots, urban street, tender childhood moment, storytelling perspective' }
        ]
    },

    'birds-eye': {
        title: '버즈 아이 뷰(Bird\'s Eye View)',
        koreanTitle: '버즈 아이 뷰',
        prompt: 'birds eye view',
        description: '거의 수직으로 위에서 아래를 내려다보는 극단적인 하이 앵글입니다.',
        usage: [
            '패턴이나 구조를 보여줄 때',
            '전체적인 레이아웃을 제시할 때',
            '초현실적인 느낌을 만들 때',
            '지도와 같은 관점을 제공할 때'
        ],
        images: [
            { src: '/images/guide/camera/birds-eye-1.jpg', caption: 'Aerial view', prompt: 'birds eye view of a spiral staircase from directly above, mesmerizing geometric pattern, black and white architectural photography, vertigo-inducing depth, minimalist abstract composition, sharp symmetrical lines, 8K' }
        ]
    },

    'overhead': {
        title: '오버헤드 샷(Overhead Shot)',
        koreanTitle: '오버헤드 샷',
        prompt: 'overhead shot',
        description: '피사체 바로 위에서 수직으로 내려다보는 샷으로, 완전한 탑다운 뷰를 제공합니다.',
        usage: [
            '음식 사진이나 플랫레이 촬영',
            '테이블 위의 물건들을 보여줄 때',
            '패턴이나 대칭성을 강조할 때',
            '독특한 시각적 효과를 원할 때'
        ],
        images: [
            { src: '/images/guide/camera/overhead-1.jpg', caption: 'Food overhead', prompt: 'overhead flat lay of an artist’s workspace with paint palette, brushes, and half-finished watercolor painting, creative mess arrangement, natural window light, lifestyle photography, colorful artistic tools' }
        ]
    },

    'dutch-angle': {
        title: '더치 앵글(Dutch Angle)',
        koreanTitle: '더치 앵글',
        prompt: 'dutch angle, tilted camera',
        description: '카메라를 의도적으로 기울여 수평선이 비스듬하게 보이도록 하는 촬영 기법입니다.',
        usage: [
            '불안정하고 혼란스러운 느낌을 줄 때',
            '긴장감이나 불안감을 조성할 때',
            '캐릭터의 심리적 불안정을 표현할 때',
            '액션 씬에서 역동성을 더할 때'
        ],
        images: [
            { src: '/images/guide/camera/dutch-angle-1.jpg', caption: 'Tilted perspective', prompt: 'dutch angle tilted shot of a jazz musician playing trumpet in smoky club, dramatic disorienting perspective, warm amber spotlight, noir atmosphere, dynamic diagonal composition, cinematic tension, 8K' }
        ]
    },

    'worms-eye': {
        title: '웜즈 아이 뷰(Worm\'s Eye View)',
        koreanTitle: '웜즈 아이 뷰',
        prompt: 'worms eye view',
        description: '지면 높이에서 위를 올려다보는 극단적인 로우 앵글로, 피사체가 거대하고 위압적으로 보입니다.',
        usage: [
            '피사체의 위엄과 권력을 극대화할 때',
            '건물이나 나무의 웅장함을 표현할 때',
            '영웅적인 인물을 묘사할 때',
            '관객에게 작고 무력한 느낌을 줄 때'
        ],
        images: [
            { src: '/images/guide/camera/worms-eye-1.jpg', caption: 'Ground perspective', prompt: 'worms eye view looking up at a child blowing dandelion seeds against bright blue sky, extreme low ground perspective, seeds floating upward, magical childhood moment, backlit sun flare, dreamy atmosphere' }
        ]
    },

    'ground-level': {
        title: '그라운드 레벨(Ground Level)',
        koreanTitle: '그라운드 레벨',
        prompt: 'ground level shot',
        description: '카메라를 지면에 놓고 촬영하는 샷으로, 독특한 시점을 제공합니다.',
        usage: [
            '작은 피사체를 크게 보이게 할 때',
            '독특한 시각적 효과를 원할 때',
            '발걸음이나 바닥의 디테일을 강조할 때',
            '색다른 관점을 제공할 때'
        ],
        images: [
            { src: '/images/guide/camera/ground-level-1.jpg', caption: 'Floor level', prompt: 'ground level shot of a golden retriever running toward camera through autumn leaves, camera on floor level, joyful energy, shallow depth of field, falling leaves in motion, warm sunlight, pet photography' }
        ]
    },

    // Viewpoint
    'side-view': {
        title: '사이드/프로필 뷰(Side/Profile View)',
        koreanTitle: '사이드/프로필 뷰',
        prompt: 'side profile view',
        description: '피사체를 정확히 90도 측면에서 바라보는 샷으로, 프로필을 명확히 보여줍니다.',
        usage: [
            '인물의 측면 윤곽을 강조할 때',
            '극적인 실루엣을 만들 때',
            '대화 장면에서 방향성을 제시할 때',
            '제품의 측면 디자인을 보여줄 때'
        ],
        images: [
            { src: '/images/guide/camera/side-view-1.jpg', caption: 'Profile portrait', prompt: 'side profile view of an elegant ballerina in perfect pose, classical silhouette against soft backlight, graceful neck line, hair in bun, dramatic rim lighting, fine art photography, timeless composition' }
        ]
    },

    'back-view': {
        title: '백 뷰(Back View)',
        koreanTitle: '백 뷰',
        prompt: 'back view, from behind',
        description: '피사체의 뒤에서 바라보는 샷으로, 신비롭고 몰입감 있는 관점을 제공합니다.',
        usage: [
            '관객이 인물과 함께 무언가를 바라보게 할 때',
            '미스터리한 분위기를 조성할 때',
            '인물의 고독함이나 사색을 표현할 때',
            '여정의 시작을 암시할 때'
        ],
        images: [
            { src: '/images/guide/camera/back-view-1.jpg', caption: 'Back silhouette', prompt: 'back view of a woman in flowing red dress standing at the edge of a cliff overlooking dramatic coastline, windswept hair, golden sunset, romantic cinematic photography, wanderlust atmosphere, ethereal' }
        ]
    },

    'three-quarter': {
        title: '3/4 뷰(3/4 View)',
        koreanTitle: '3/4 뷰',
        prompt: 'three quarter view',
        description: '피사체를 약 45도 각도에서 바라보는 샷으로, 얼굴의 입체감과 특징을 잘 보여줍니다.',
        usage: [
            '가장 보편적인 인물 촬영 각도',
            '얼굴의 입체감을 표현할 때',
            '자연스럽고 편안한 느낌을 줄 때',
            '제품의 형태를 효과적으로 보여줄 때'
        ],
        images: [
            { src: '/images/guide/camera/three-quarter-1.jpg', caption: 'Three-quarter portrait', prompt: 'three-quarter view portrait of a young man with warm smile, 45-degree angle face catching soft golden hour light, natural outdoor background bokeh, classic portrait composition, authentic expression, 8K' }
        ]
    },

    'rear-three-quarter': {
        title: '리어 3/4 뷰(Rear 3/4 View)',
        koreanTitle: '리어 3/4 뷰',
        prompt: 'rear three quarter view',
        description: '피사체의 뒤쪽에서 약 45도 각도로 바라보는 샷입니다.',
        usage: [
            '인물이 무언가를 바라보는 방향을 암시할 때',
            '신비로운 분위기를 만들 때',
            '차량이나 제품의 후면 디자인을 보여줄 때',
            '출발이나 이별의 순간을 표현할 때'
        ],
        images: [
            { src: '/images/guide/camera/rear-three-quarter-1.jpg', caption: 'Rear quarter angle', prompt: 'rear three-quarter angle of a woman in vintage dress looking back over shoulder with mysterious smile, autumn garden setting, dramatic warm lighting, cinematic composition, fashion editorial, atmospheric' }
        ]
    },

    // Special Shots
    'pov-shot': {
        title: 'POV 샷(POV Shot)',
        koreanTitle: 'POV 샷',
        prompt: 'POV shot, first person view',
        description: '인물의 시점에서 보이는 그대로를 보여주는 샷으로, 1인칭 시점 샷입니다.',
        usage: [
            '관객이 인물의 입장이 되도록 할 때',
            '긴장감과 몰입감을 극대화할 때',
            '인물의 주관적 경험을 공유할 때',
            '공포 영화나 액션 씨퀀에서'
        ],
        images: [
            { src: '/images/guide/camera/pov-shot-1.jpg', caption: 'First person view', prompt: 'POV first person view of hands opening an old leather journal revealing pressed flowers and handwritten letters, subjective camera perspective, warm desk lamp light, intimate discovery moment, nostalgic detail' }
        ]
    },

    'over-shoulder': {
        title: '오버더숨더(Over-the-Shoulder)',
        koreanTitle: '오버더숨더',
        prompt: 'over the shoulder shot',
        description: '한 인물의 어깨 너머로 다른 인물이나 대상을 바라보는 샷입니다.',
        usage: [
            '대화 장면의 기본 구도',
            '인물 간의 관계성을 보여줄 때',
            '대화의 방향성을 명확히 할 때',
            '인물의 반응을 포착할 때'
        ],
        images: [
            { src: '/images/guide/camera/over-shoulder-1.jpg', caption: 'OTS dialogue', prompt: 'over the shoulder shot of a photographer reviewing images on camera screen, foreground shoulder silhouette, bokeh city lights background, depth composition, creative process moment, warm evening tones' }
        ]
    },

    'two-shot': {
        title: '투/쓰리/그룹(Two/Three/Group)',
        koreanTitle: '투/쓰리/그룹 샷',
        prompt: 'two shot, three shot, group shot',
        description: '2명, 3명 또는 여러 명이 함께 프레임 안에 들어가는 샷입니다.',
        usage: [
            '인물들 간의 관계를 보여줄 때',
            '대화나 상호작용을 표현할 때',
            '집단의 역학을 보여줄 때',
            '공동체 의식을 강조할 때'
        ],
        images: [
            { src: '/images/guide/camera/two-shot-1.jpg', caption: 'Two people', prompt: 'two shot of grandmother teaching young granddaughter to cook, dual subject framing at kitchen counter, warm home lighting, generational bond, flour-dusted hands, genuine smiles, family documentary photography' }
        ]
    },

    'establishing': {
        title: '에스타블리싱(Establishing)',
        koreanTitle: '에스타블리싱',
        prompt: 'establishing shot',
        description: '장소나 환경을 소개하는 넓은 샷으로, 보통 장면의 시작 부분에 사용됩니다.',
        usage: [
            '새로운 장소를 소개할 때',
            '시간이나 계절을 알릴 때',
            '분위기를 설정할 때',
            '세계관을 구축할 때'
        ],
        images: [
            { src: '/images/guide/camera/establishing-1.jpg', caption: 'City establishing', prompt: 'establishing shot of a grand Venetian canal with gondolas at sunrise, wide view of historic architecture, morning mist on water, travel photography, golden early light reflecting on facades, cinematic scope, 8K' }
        ]
    },

    'master-shot': {
        title: '마스터 샷(Master Shot)',
        koreanTitle: '마스터 샷',
        prompt: 'master shot',
        description: '전체 장면을 처음부터 끝까지 담는 넓은 샷으로, 모든 등장인물과 행동을 포함합니다.',
        usage: [
            '장면의 전체 구조를 보여줄 때',
            '편집의 기준점으로 사용',
            '인물들의 위치 관계를 명확히 할 때',
            '연극적인 연출에서'
        ],
        images: [
            { src: '/images/guide/camera/master-shot-1.jpg', caption: 'Full scene view', prompt: 'master shot of an entire orchestra on grand concert hall stage during performance, full scene coverage from balcony perspective, dramatic stage lighting, wide view of all musicians, symphonic grandeur' }
        ]
    },

    'insert-shot': {
        title: '인서트 샷(Insert Shot)',
        koreanTitle: '인서트 샷',
        prompt: 'insert shot, cutaway',
        description: '주 장면에 삽입되는 짧은 샷으로, 디테일이나 중요한 정보를 보여줍니다.',
        usage: [
            '중요한 디테일을 강조할 때',
            '시간 경과를 표현할 때',
            '인물의 감정을 간접적으로 전달할 때',
            '정보나 단서를 제공할 때'
        ],
        images: [
            { src: '/images/guide/camera/insert-shot-1.jpg', caption: 'Detail insert', prompt: 'insert shot detail of weathered hands pouring tea from a ceramic pot into a delicate cup, close detail of golden liquid, steam rising, warm side lighting, Japanese tea ceremony, mindful moment, 8K' }
        ]
    },

    // Composition
    'rule-of-thirds': {
        title: '삼등분 법칙(Rule of Thirds)',
        koreanTitle: '삼등분 법칙',
        prompt: 'rule of thirds composition',
        description: '화면을 가로와 세로로 각각 3등분하여 교차점에 주요 요소를 배치하는 구도입니다.',
        usage: [
            '안정감 있고 균형 잡힌 구도',
            '시선을 자연스럽게 유도할 때',
            '주체와 배경의 균형을 맞출 때',
            '풍경 사진에서 수평선 배치'
        ],
        images: [
            { src: '/images/guide/camera/rule-of-thirds-1.jpg', caption: 'Third lines', prompt: 'rule of thirds composition of a lone fisherman casting line at lake, placed at right intersection point, misty morning landscape, mountains in background, balanced asymmetric framing, serene atmosphere, 8K' }
        ]
    },

    'center-comp': {
        title: '중앙 구도(Center Composition)',
        koreanTitle: '중앙 구도',
        prompt: 'center composition',
        description: '주요 피사체를 화면 중앙에 배치하는 가장 직관적인 구도입니다.',
        usage: [
            '피사체에 집중하게 할 때',
            '대칭적인 구도를 만들 때',
            '강력한 존재감을 주고 싶을 때',
            '인물 초상에 적합'
        ],
        images: [
            { src: '/images/guide/camera/center-comp-1.jpg', caption: 'Central focus', prompt: 'center composition of a monk in orange robes meditating in a grand temple corridor, perfectly centered subject, symmetrical architecture receding, vanishing point perspective, spiritual calm, powerful symmetry' }
        ]
    },

    'symmetrical': {
        title: '대칭 구도(Symmetrical Shot)',
        koreanTitle: '대칭 구도',
        prompt: 'symmetrical composition',
        description: '화면을 좌우 또는 상하로 대칭되게 구성하는 구도입니다.',
        usage: [
            '안정감과 균형감을 강조할 때',
            '공식적이고 엄숙한 분위기',
            '건축물이나 인테리어 촬영',
            '예술적인 효과를 원할 때'
        ],
        images: [
            { src: '/images/guide/camera/symmetrical-1.jpg', caption: 'Perfect symmetry', prompt: 'perfectly symmetrical composition of the Taj Mahal reflected in still water pool, mirror image architecture, morning golden light, classical balanced framing, breathtaking architectural photography, serene precision, 8K' }
        ]
    },

    'frame-in-frame': {
        title: '프레임 속 프레임(Frame in Frame)',
        koreanTitle: '프레임 속 프레임',
        prompt: 'frame within a frame',
        description: '화면 안에 다른 프레임 요소를 사용하여 깊이감을 만드는 구도입니다.',
        usage: [
            '깊이감과 차원을 추가할 때',
            '주의를 집중시키고 싶을 때',
            '창문이나 문을 통한 샷',
            '스토리텔링에 효과적'
        ],
        images: [
            { src: '/images/guide/camera/frame-in-frame-1.jpg', caption: 'Natural frame', prompt: 'frame within a frame composition of a woman reading in a window seat, window frame creating natural border, warm interior vs cool exterior, layers of depth, intimate storytelling, creative framing technique' }
        ]
    },

    'diagonal': {
        title: '대각선 구도(Diagonal)',
        koreanTitle: '대각선 구도',
        prompt: 'diagonal composition',
        description: '대각선을 활용하여 동적이고 활력 있는 구도를 만드는 기법입니다.',
        usage: [
            '움직임과 에너지를 표현할 때',
            '시선을 유도하고 싶을 때',
            '액션과 속도감을 강조할 때',
            '독특한 구도를 원할 때'
        ],
        images: [
            { src: '/images/guide/camera/diagonal-1.jpg', caption: 'Diagonal lines', prompt: 'diagonal composition of a skateboarder grinding down a handrail, dynamic diagonal line cutting across frame, urban background, frozen action, energetic movement, street photography, bold angular composition, 8K' }
        ]
    },

    'layered': {
        title: '레이어드 샷(Layered Shot)',
        koreanTitle: '레이어드 샷',
        prompt: 'layered composition',
        description: '전경, 중경, 후경의 여러 레이어를 활용한 깊이 있는 구도입니다.',
        usage: [
            '깊이감과 차원을 강조할 때',
            '복잡한 스토리텔링',
            '공간의 규모를 표현할 때',
            '풍경 사진에 효과적'
        ],
        images: [
            { src: '/images/guide/camera/layered-1.jpg', caption: 'Multiple layers', prompt: 'layered composition with cherry blossoms in foreground, bride in traditional kimono in midground, ancient temple in background, three distinct depth layers, Japanese spring scene, atmospheric perspective, 8K' }
        ]
    },

    'negative-space': {
        title: '네거티브 스페이스(Negative Space)',
        koreanTitle: '네거티브 스페이스',
        prompt: 'negative space composition',
        description: '비어있는 공간을 의도적으로 활용하여 주체를 강조하는 구도입니다.',
        usage: [
            '미니멀한 표현을 원할 때',
            '주체를 돋보이게 할 때',
            '고독함이나 외로움을 표현',
            '예술적 효과를 원할 때'
        ],
        images: [
            { src: '/images/guide/camera/negative-space-1.jpg', caption: 'Empty space', prompt: 'negative space composition of single red umbrella on vast snowy white landscape, minimal subject against expansive emptiness, minimalist photography, isolation emphasis, striking color contrast, contemplative, 8K' }
        ]
    },

    // ============= LIGHTING =============
    // Natural Light
    'golden-hour': {
        title: '골든 아워(Golden Hour)',
        koreanTitle: '골든 아워',
        prompt: 'golden hour lighting',
        description: '해가 뜨고 난 직후, 그리고 해가 지기 직전의 시간대. 빛이 부드럽고 따뜻한 황금빛을 띱니다.',
        usage: [
            '로맨틱한 분위기를 조성할 때',
            '따뜻하고 향수를 자극하는 장면',
            '풍경과 인물 사진',
            '마법 같은 분위기 연출'
        ],
        images: [
            { src: '/images/guide/lighting/golden-hour-1.jpg', caption: 'Warm golden light', prompt: 'golden hour portrait of a young couple on a hilltop, warm amber backlight creating hair glow and lens flare, long gentle shadows, romantic atmosphere, soft golden skin tones, dreamy sunset photography, 8K' }
        ]
    },

    'blue-hour': {
        title: '블루 아워(Blue Hour)',
        koreanTitle: '블루 아워',
        prompt: 'blue hour lighting',
        description: '해가 뜨기 직전, 그리고 해가 진 직후의 시간대. 세상이 전체적으로 차분한 푸른빛을 띱니다.',
        usage: [
            '고요하고 차분한 분위기',
            '도시 야경 촬영',
            'SF나 판타지 장면',
            '신비로운 느낌 연출'
        ],
        images: [
            { src: '/images/guide/lighting/blue-hour-1.jpg', caption: 'Blue twilight', prompt: 'blue hour portrait of a violinist playing on a rooftop terrace, deep indigo twilight sky, city lights twinkling below, cool blue tones wrapping the scene, serene evening mood, long exposure city glow, magical' }
        ]
    },

    'overcast': {
        title: '흐린 날(Overcast)',
        koreanTitle: '오버캐스트',
        prompt: 'overcast lighting',
        description: '구름이 하늘을 덮어 태양광이 확산되어 부드럽고 균일한 빛을 만드는 조명 상태입니다.',
        usage: [
            '부드러운 그림자가 필요할 때',
            '균일한 조명이 필요한 인물 촬영',
            '차분하고 우울한 분위기',
            '피부톤을 자연스럽게 표현'
        ],
        images: [
            { src: '/images/guide/lighting/overcast-1.jpg', caption: 'Soft diffused light', prompt: 'overcast day portrait of a woman in a flower garden, soft diffused lighting without harsh shadows, cloudy sky acting as natural softbox, even skin illumination, flattering gentle light, editorial fashion photography' }
        ]
    },

    'harsh-sunlight': {
        title: '강한 햇빛(Harsh Sunlight)',
        koreanTitle: '강렬한 햇빛',
        prompt: 'harsh sunlight',
        description: '정오의 직사광선처럼 강하고 직접적인 햇빛으로, 선명한 그림자와 높은 대비를 만듭니다.',
        usage: [
            '극적이고 강렬한 효과',
            '그림자 패턴을 활용한 구성',
            '여름의 뜨거운 느낌',
            '고대비 흑백 사진'
        ],
        images: [
            { src: '/images/guide/lighting/harsh-sunlight-1.jpg', caption: 'Strong shadows', prompt: 'harsh midday sunlight portrait with strong geometric shadows from venetian blinds falling across a woman’s face, high contrast light stripes, dramatic shadow pattern, graphic composition, bold artistic portrait' }
        ]
    },

    // Studio Lighting
    'rembrandt': {
        title: '렘브란트 조명(Rembrandt)',
        koreanTitle: '렘브란트 조명',
        prompt: 'Rembrandt lighting',
        description: '빛을 받는 쪽 반대편 뺨에 코 그림자와 뺨 그림자가 만나 작은 빛의 삼각형을 만드는 조명입니다.',
        usage: [
            '고전적이고 예술적인 초상화',
            '깊이 있는 인물 표현',
            '드라마틱한 분위기',
            '진중한 느낌의 포트레이트'
        ],
        images: [
            { src: '/images/guide/lighting/rembrandt-1.jpg', caption: 'Classic portrait', prompt: 'Rembrandt lighting portrait of a bearded man, signature triangle of light on shadowed cheek, dramatic chiaroscuro against dark background, one key light at 45 degrees, classical painting quality, studio mastery, 8K' }
        ]
    },

    'butterfly': {
        title: '버터플라이 조명(Butterfly)',
        koreanTitle: '나비 조명',
        prompt: 'butterfly lighting',
        description: '주 조명을 인물의 정면 위쪽에 배치하여 코 바로 아래에 작은 나비 모양의 그림자를 만드는 조명입니다.',
        usage: [
            '글래머러스한 뷰티 화보',
            '할리우드 스타일 포트레이트',
            '패션 사진',
            '이상적인 아름다움 표현'
        ],
        images: [
            { src: '/images/guide/lighting/butterfly-1.jpg', caption: 'Glamour lighting', prompt: 'butterfly lighting glamour portrait of a model, symmetrical shadow beneath nose forming butterfly shape, beauty dish directly overhead, flawless luminous skin, high-fashion beauty shot, Hollywood golden age elegance' }
        ]
    },

    'split-lighting': {
        title: '스플릿 조명(Split Lighting)',
        koreanTitle: '분할 조명',
        prompt: 'split lighting',
        description: '조명을 인물의 정측면에 배치하여 얼굴을 밝은 부분과 어두운 부분으로 정확히 반으로 나누는 조명입니다.',
        usage: [
            '강렬하고 극적인 효과',
            '필름 누아르 스타일',
            '미스터리한 분위기',
            '내적 갈등의 표현'
        ],
        images: [
            { src: '/images/guide/lighting/split-lighting-1.jpg', caption: 'Half-lit face', prompt: 'split lighting dramatic portrait of a pianist, face divided perfectly into light and deep shadow halves, single side light source, high contrast noir mood, mysterious artistic character study, cinematic intensity' }
        ]
    },

    'rim-lighting': {
        title: '림 조명(Rim Lighting)',
        koreanTitle: '림 라이팅',
        prompt: 'rim lighting',
        description: '피사체의 윤곽선 전체를 따라 빛의 테두리가 생기는 효과를 만드는 조명 기법입니다.',
        usage: [
            '피사체를 배경과 분리',
            '입체감과 깊이감 추가',
            '신비롭고 극적인 느낌',
            '실루엣 강조'
        ],
        images: [
            { src: '/images/guide/lighting/rim-lighting-1.jpg', caption: 'Edge lighting', prompt: 'rim lighting portrait of a dancer with luminous edge glow outlining entire silhouette, dark studio background, backlit contour highlighting hair and shoulders, ethereal glowing outline, dramatic separation, 8K' }
        ]
    },

    // Mood Lighting
    'neon-lights': {
        title: '네온 조명(Neon Lights)',
        koreanTitle: '네온 라이트',
        prompt: 'neon lights',
        description: '형광색의 네온사인이나 LED 조명으로 만드는 현대적이고 도시적인 조명 효과입니다.',
        usage: [
            '사이버펑크 분위기',
            '도시의 밤 장면',
            '클럽이나 바 설정',
            '레트로 또는 미래적 느낌'
        ],
        images: [
            { src: '/images/guide/lighting/neon-lights-1.jpg', caption: 'Cyberpunk neon', prompt: 'neon lights portrait of a young woman in rain-soaked Tokyo alley, vivid pink and blue neon reflections on wet skin, colorful sign glow, cyberpunk night atmosphere, futuristic urban portrait, vibrant cinematic colors' }
        ]
    },

    'candlelight': {
        title: '촛불(Candlelight)',
        koreanTitle: '캔들라이트',
        prompt: 'candlelight',
        description: '촛불의 부드럽고 따뜻한 빛으로 만드는 아늑하고 로맨틱한 조명입니다.',
        usage: [
            '로맨틱한 분위기',
            '역사적 또는 판타지 설정',
            '친밀하고 아늑한 느낌',
            '종교적이거나 의식적인 장면'
        ],
        images: [
            { src: '/images/guide/lighting/candlelight-1.jpg', caption: 'Warm candle glow', prompt: 'candlelight intimate portrait of a woman reading an old book, soft warm orange flickering glow on face, single candle source, dark cozy room, romantic chiaroscuro, Renaissance painting atmosphere, gentle warm shadows' }
        ]
    },

    'moonlight': {
        title: '달빛(Moonlight)',
        koreanTitle: '문라이트',
        prompt: 'moonlight',
        description: '달빛의 차갑고 은은한 푸른빛으로 만드는 신비로운 야간 조명입니다.',
        usage: [
            '로맨틱하거나 신비로운 야간 장면',
            '판타지나 공포 분위기',
            '고요하고 평화로운 느낌',
            '꿈같은 분위기'
        ],
        images: [
            { src: '/images/guide/lighting/moonlight-1.jpg', caption: 'Blue moonlight', prompt: 'moonlight portrait of a couple slow dancing on a terrace, silvery blue lunar illumination, cool ethereal color temperature, stars visible, romantic mysterious atmosphere, night photography, dreamlike gentle glow' }
        ]
    },

    'firelight': {
        title: '화염 조명(Firelight)',
        koreanTitle: '파이어라이트',
        prompt: 'firelight',
        description: '모닥불이나 벽난로의 따뜻하고 깜빡이는 주황색 빛으로 만드는 조명입니다.',
        usage: [
            '캠프파이어 장면',
            '원시적이거나 역사적 설정',
            '따뜻하고 아늑한 분위기',
            '생존이나 모험 테마'
        ],
        images: [
            { src: '/images/guide/lighting/firelight-1.jpg', caption: 'Campfire glow', prompt: 'firelight portrait of a storyteller by campfire, warm dancing orange glow illuminating animated expression, flickering shadows on surrounding faces of listeners, outdoor night gathering, cozy warmth, folk tale atmosphere' }
        ]
    },

    // ============= STYLES =============
    // Art Styles
    'photorealistic': {
        title: '포토리얼리스틱(Photorealistic)',
        koreanTitle: '사실주의',
        prompt: 'photorealistic',
        description: '실제 사진과 구별하기 어려울 정도로 정확하고 세밀한 표현 스타일입니다.',
        usage: [
            '제품 시각화',
            '건축 렌더링',
            '광고용 이미지',
            '디지털 휴먼'
        ],
        images: [
            { src: '/images/guide/style/photorealistic-1.jpg', caption: 'Realistic portrait', prompt: 'photorealistic portrait of a young woman, every pore and hair strand visible, natural skin texture, soft studio lighting, ultra-high resolution, indistinguishable from photograph, 8K detail' }
        ]
    },

    'hyperrealistic': {
        title: '하이퍼리얼리스틱(Hyperrealistic)',
        koreanTitle: '극사실주의',
        prompt: 'hyperrealistic',
        description: '현실보다 더 선명하고 과장된 디테일을 보여주는 극도로 정밀한 표현 스타일입니다.',
        usage: [
            '파인 아트',
            '고해상도 인물화',
            '과학적 일러스트레이션',
            '극세밀 묘사'
        ],
        images: [
            { src: '/images/guide/style/hyperrealistic-1.jpg', caption: 'Extreme detail', prompt: 'hyperrealistic extreme detail portrait, individual skin pores visible, micro hair detail, photographic precision beyond reality, studio lighting, uncanny valley quality, 8K resolution' }
        ]
    },


    // Digital Art
    'digital-painting': {
        title: '디지털 페인팅(Digital Painting)',
        koreanTitle: '디지털 페인팅',
        prompt: 'digital painting, soft brushstrokes, rich colors, detailed',
        features: '디지털 브러시로 전통 회화를 모방, 부드러운 블렌딩과 풍부한 색감',
        mood: '판타지, 시네마틱, 감성적',
        description: '디지털 도구를 사용하여 전통적인 회화 기법을 모방하거나 새로운 스타일을 창조하는 아트입니다. 레이어와 블렌딩 모드를 활용해 깊이 있는 표현이 가능합니다.',
        usage: [
            '캐릭터 일러스트',
            '판타지 풍경',
            '북커버 아트',
            '게임 아트'
        ],
        examplePrompts: [
            { title: '판타지 캐릭터', prompt: 'digital painting of a warrior princess in enchanted forest, vibrant colors, detailed armor, soft brushstrokes' },
            { title: '풍경 아트', prompt: 'digital painting, serene mountain lake at golden hour, rich colors, atmospheric depth' },
            { title: '사이버펑크 씬', prompt: 'digital painting, futuristic cityscape, neon lights, cinematic composition, detailed' },
        ],
        images: [
            { src: '/images/guide/style/digital-painting-1.jpg', caption: 'Digital artwork', prompt: 'digital painting of an enchanted forest with bioluminescent mushrooms, rich vibrant colors, soft luminous brushstrokes, fantasy atmosphere, detailed foliage, magical woodland, painterly' }
        ]
    },

    'concept-art': {
        title: '컨셉 아트(Concept Art)',
        koreanTitle: '컨셉 아트',
        prompt: 'concept art, detailed, cinematic lighting, dramatic composition',
        features: '빠른 시각화와 아이디어 전달, 디테일보다 무드와 구도 중심',
        mood: '시네마틱, 드라마틱, 서사적',
        description: '영화, 게임, 애니메이션 등의 시각적 개념을 개발하고 전달하는 일러스트레이션입니다. 프리프로덕션 단계에서 월드빌딩과 캐릭터 디자인의 방향을 설정합니다.',
        usage: [
            '영화 프리프로덕션',
            '게임 월드빌딩',
            '캐릭터 디자인',
            '환경 디자인'
        ],
        examplePrompts: [
            { title: '판타지 환경', prompt: 'concept art, ancient floating city above clouds, dramatic lighting, epic scale, detailed architecture' },
            { title: '크리처 디자인', prompt: 'concept art of a biomechanical dragon, detailed anatomy, dark fantasy, cinematic' },
            { title: 'SF 인테리어', prompt: 'concept art, spaceship interior corridor, sci-fi, volumetric lighting, highly detailed' },
        ],
        images: [
            { src: '/images/guide/style/concept-art-1.jpg', caption: 'Character concept', prompt: 'concept art of an ancient floating city above clouds, dramatic lighting, epic scale, detailed architecture, fantasy environment design, cinematic atmosphere, visual development, 8K' }
        ]
    },

    'matte-painting': {
        title: '매트 페인팅(Matte Painting)',
        koreanTitle: '매트 페인팅',
        prompt: 'matte painting, photorealistic, epic scale, cinematic atmosphere',
        features: '사진과 페인팅을 합성, 포토리얼리스틱한 거대 스케일의 배경',
        mood: '장대한, 신비로운, 영화적',
        description: '영화나 게임의 배경을 위해 제작되는 고도로 사실적인 디지털 페인팅입니다. 사진 합성과 디지털 페인팅을 결합하여 현실에서 촬영 불가능한 장면을 구현합니다.',
        usage: [
            '영화 VFX 배경',
            '판타지 세계관',
            '대규모 풍경',
            '게임 환경 아트'
        ],
        examplePrompts: [
            { title: '판타지 왕국', prompt: 'matte painting, ancient kingdom on cliff edge, waterfalls, dramatic sunset, photorealistic, epic scale' },
            { title: 'SF 도시', prompt: 'matte painting, futuristic megacity skyline, atmospheric haze, cinematic lighting, ultra detailed' },
            { title: '고대 유적', prompt: 'matte painting, overgrown ancient temple in jungle, volumetric light rays, mystical atmosphere' },
        ],
        images: [
            { src: '/images/guide/style/matte-painting-1.jpg', caption: 'Epic landscape', prompt: 'matte painting of an ancient kingdom on cliff edge overlooking vast ocean, waterfalls cascading into mist, dramatic sunset sky, photorealistic epic landscape, cinematic scale, 8K' }
        ]
    },

    '3d-render': {
        title: '3D 렌더(3D Render)',
        koreanTitle: '3D 렌더링',
        prompt: '3D render, octane render, highly detailed, studio lighting',
        features: '사실적인 질감과 조명, 정밀한 형태와 재질 표현',
        mood: '깔끔한, 전문적, 사실적',
        description: '3D 모델링 소프트웨어를 사용하여 생성된 컴퓨터 그래픽 이미지입니다. Octane, V-Ray 등의 렌더러를 활용해 사실적인 질감과 조명을 구현합니다.',
        usage: [
            '제품 시각화',
            '건축 비주얼',
            '캐릭터 모델링',
            'VFX와 애니메이션'
        ],
        examplePrompts: [
            { title: '제품 렌더링', prompt: '3D render of a luxury perfume bottle, glass material, studio lighting, octane render, photorealistic' },
            { title: '캐릭터', prompt: '3D render, stylized robot character, metallic surface, subsurface scattering, dramatic lighting' },
            { title: '건축 비주얼', prompt: '3D render, modern minimalist house, interior design, warm lighting, unreal engine' },
        ],
        images: [
            { src: '/images/guide/style/3d-render-1.jpg', caption: '3D model', prompt: 'octane render 3D model of a translucent crystal dragon figurine, subsurface scattering, caustic light effects, studio lighting, highly detailed, product visualization, photorealistic' }
        ]
    },

    // ===== 3D/CG 계열 - 신규 =====
    'isometric': {
        title: '아이소메트릭(Isometric)',
        koreanTitle: '아이소메트릭',
        prompt: 'isometric view, 3D render, miniature diorama, clean design',
        features: '45도 각도의 등각 투영, 미니어처 느낌의 귀여운 3D 장면',
        mood: '깔끔한, 귀여운, 체계적',
        description: '등각 투영법(Isometric Projection)으로 그린 3D 스타일입니다. 건물, 방, 도시 등을 미니어처처럼 표현하며 게임이나 인포그래픽에 많이 사용됩니다.',
        usage: [
            '게임 맵 디자인',
            '인포그래픽',
            '건축 다이어그램',
            'SNS 일러스트'
        ],
        examplePrompts: [
            { title: '미니어처 카페', prompt: 'isometric view of a cozy coffee shop interior, miniature diorama, warm lighting, detailed furniture, 3D render' },
            { title: '게임 맵', prompt: 'isometric fantasy game map, medieval village, pixel-perfect, colorful buildings, top-down 45 degree angle' },
            { title: '오피스', prompt: 'isometric modern office workspace, clean design, pastel colors, miniature scale, 3D illustration' },
        ],
        images: [
            { src: '/images/guide/style/isometric-1.jpg', caption: 'isometric example 1', prompt: 'isometric view of a cozy coffee shop interior, tiny detailed furniture, warm lighting through windows, miniature people sitting at tables, diorama style, pastel color palette, cute architectural cutaway, highly detailed, 8K' }
        ]
    },

    'low-poly': {
        title: '로우폴리(Low Poly)',
        koreanTitle: '로우폴리',
        prompt: 'low poly art, geometric, faceted surfaces, vibrant colors',
        features: '적은 폴리곤으로 구성된 기하학적 형태, 면이 드러나는 독특한 질감',
        mood: '모던, 미니멀, 그래픽적',
        description: '적은 수의 폴리곤으로 구성된 3D 아트 스타일입니다. 기하학적이고 각진 면들이 만들어내는 독특한 미감이 특징이며, 게임과 모션 그래픽에서 인기입니다.',
        usage: [
            '게임 에셋',
            '모션 그래픽',
            '배경 일러스트',
            '앱 아이콘'
        ],
        examplePrompts: [
            { title: '산 풍경', prompt: 'low poly mountain landscape, geometric terrain, sunset colors, faceted surfaces, minimal 3D art' },
            { title: '동물', prompt: 'low poly fox, geometric facets, vibrant orange, white background, clean 3D render' },
            { title: '도시', prompt: 'low poly city scene, colorful buildings, geometric shapes, isometric view, stylized 3D' },
        ],
        images: [
            { src: '/images/guide/style/low-poly-1.jpg', caption: 'low poly example 1', prompt: 'low poly 3D render of a majestic wolf standing on a rocky cliff, geometric faceted surfaces, dramatic sunset gradient background, minimal polygon aesthetic, stylized nature scene, vibrant angular shapes, modern digital art' }
        ]
    },

    'claymation': {
        title: '클레이메이션(Claymation)',
        koreanTitle: '클레이메이션',
        prompt: 'claymation style, clay figure, stop motion, handmade texture',
        features: '점토 재질감, 수작업 느낌, 스톱모션 애니메이션 질감',
        mood: '따뜻한, 아날로그, 귀여운',
        description: '점토(클레이)로 만든 듯한 캐릭터와 장면을 표현하는 스타일입니다. 월리스와 그로밋, 치킨런 같은 스톱모션 애니메이션의 질감을 디지털로 구현합니다.',
        usage: [
            '어린이 콘텐츠',
            '광고 캐릭터',
            'SNS 콘텐츠',
            '뮤직비디오'
        ],
        examplePrompts: [
            { title: '클레이 캐릭터', prompt: 'claymation style cute robot character, clay texture, handmade feel, stop motion aesthetic, soft lighting' },
            { title: '미니어처 씬', prompt: 'claymation miniature kitchen scene, clay figures cooking, warm colors, stop motion animation style' },
            { title: '동물', prompt: 'claymation style puppy, sculpted clay texture, big eyes, colorful, studio photography' },
        ],
        images: [
            { src: '/images/guide/style/claymation-1.jpg', caption: 'claymation example 1', prompt: 'claymation style cheerful baker character holding a fresh baguette in a tiny bakery, soft clay texture, handmade stop-motion aesthetic, warm cozy atmosphere, Aardman Studios quality, charming imperfections, detailed miniature set' }
        ]
    },

    'voxel-art': {
        title: '복셀 아트(Voxel Art)',
        koreanTitle: '복셀 아트',
        prompt: 'voxel art, 3D pixel art, cubic blocks, colorful',
        features: '3D 픽셀로 구성된 블록형 세계, 마인크래프트 같은 큐빅 스타일',
        mood: '레트로, 게임적, 장난스러운',
        description: '3D 공간에서 픽셀(복셀)을 쌓아 만드는 아트 스타일입니다. 마인크래프트에서 영감 받은 블록 기반 미학으로, 레트로 게임 감성과 3D를 결합합니다.',
        usage: [
            '인디 게임 아트',
            'NFT 아트',
            'SNS 프로필',
            '건축 모델링'
        ],
        examplePrompts: [
            { title: '복셀 도시', prompt: 'voxel art city, cubic buildings, colorful blocks, isometric view, magicavoxel style' },
            { title: '복셀 캐릭터', prompt: 'voxel art character, 3D pixel knight, blocky armor, retro game aesthetic' },
            { title: '복셀 방', prompt: 'voxel art cozy bedroom, cubic furniture, warm lighting, miniature diorama, detailed' },
        ],
        images: [
            { src: '/images/guide/style/voxel-art-1.jpg', caption: 'voxel art example 1', prompt: 'voxel art bustling Japanese street market at night, glowing lanterns and neon signs, tiny cube-built characters shopping, colorful food stalls, Minecraft-meets-Tokyo aesthetic, detailed blocky architecture, warm atmospheric lighting' }
        ]
    },

    // ===== 일러스트레이션 계열 - 신규 =====
    'flat-illustration': {
        title: '플랫 일러스트(Flat Illustration)',
        koreanTitle: '플랫 일러스트',
        prompt: 'flat illustration, minimal design, bold colors, clean shapes',
        features: '그림자와 그라데이션 최소화, 깔끔한 면 분할과 대담한 색상',
        mood: '모던, 깔끔한, 친근한',
        description: '입체감을 최소화하고 평면적인 색면으로 구성하는 일러스트레이션 스타일입니다. UI/UX 디자인, 웹사이트, 앱 일러스트에서 가장 많이 사용되는 현대적 스타일입니다.',
        usage: [
            '웹/앱 UI 일러스트',
            '프레젠테이션',
            '인포그래픽',
            '브랜드 아이덴티티'
        ],
        examplePrompts: [
            { title: '업무 장면', prompt: 'flat illustration of people working in modern office, bold colors, minimal shadows, clean geometric shapes' },
            { title: '풍경', prompt: 'flat illustration, countryside landscape, simple shapes, limited color palette, minimal design' },
            { title: '캐릭터', prompt: 'flat illustration character design, friendly person with laptop, bold outlines, pastel colors' },
        ],
        images: [
            { src: '/images/guide/style/flat-illustration-1.jpg', caption: 'flat illustration example 1', prompt: 'flat illustration of a young woman riding a bicycle through a colorful city street, bold geometric shapes, limited color palette, modern graphic design style, clean lines, editorial illustration quality, contemporary minimalist art' }
        ]
    },

    'line-art': {
        title: '라인 아트(Line Art)',
        koreanTitle: '라인 아트',
        prompt: 'line art, black and white, clean lines, minimal, ink drawing',
        features: '선만으로 구성, 면의 채움 없이 윤곽과 디테일 표현',
        mood: '세련된, 미니멀, 우아한',
        description: '선(line)만을 사용하여 형태를 표현하는 아트 스타일입니다. 채색 없이 선의 굵기와 밀도만으로 깊이와 질감을 표현하며, 타투 디자인이나 일러스트에 많이 활용됩니다.',
        usage: [
            '타투 디자인',
            '컬러링 북',
            '로고 디자인',
            '패션 스케치'
        ],
        examplePrompts: [
            { title: '보태니컬', prompt: 'line art botanical illustration, delicate flowers, fine black ink lines, white background, detailed' },
            { title: '인물', prompt: 'continuous line art portrait, single line drawing, minimalist face, elegant curves' },
            { title: '건축', prompt: 'line art architectural sketch, detailed building facade, fine pen strokes, black and white' },
        ],
        images: [
            { src: '/images/guide/style/line-art-1.jpg', caption: 'line art example 1', prompt: 'fine line art portrait of an elegant woman with flowing hair intertwined with flowers, intricate detailed linework, black ink on white background, botanical elements, delicate crosshatching, pen and ink style, haute couture fashion illustration' }
        ]
    },

    'vector-art': {
        title: '벡터 아트(Vector Art)',
        koreanTitle: '벡터 아트',
        prompt: 'vector art, clean edges, scalable design, bold colors, Adobe Illustrator style',
        features: '수학적 곡선 기반, 무한 확대 가능한 깔끔한 엣지',
        mood: '전문적, 깔끔한, 그래픽적',
        description: '수학적 곡선(베지어)으로 구성된 디지털 아트입니다. 확대해도 깨지지 않는 특성으로 로고, 아이콘, 인쇄물 디자인에 필수적이며, 깔끔하고 정교한 느낌이 특징입니다.',
        usage: [
            '로고 디자인',
            '아이콘 세트',
            '인쇄물 디자인',
            '스티커/이모지'
        ],
        examplePrompts: [
            { title: '동물 캐릭터', prompt: 'vector art cute animal character, clean edges, bold flat colors, geometric shapes, Adobe Illustrator style' },
            { title: '풍경 일러스트', prompt: 'vector art landscape, sunset over mountains, clean gradients, scalable design, minimal' },
            { title: '아이콘', prompt: 'vector art icon set, food items, flat design, consistent style, bold outlines, colorful' },
        ],
        images: [
            { src: '/images/guide/style/vector-art-1.jpg', caption: 'vector art example 1', prompt: 'vector art of a stylish astronaut floating in space surrounded by colorful planets, clean sharp edges, flat bold colors, Adobe Illustrator style, graphic design poster, scalable crisp artwork, modern space exploration theme' }
        ]
    },

    'children-illustration': {
        title: '동화 일러스트(Children\'s Illustration)',
        koreanTitle: '동화 일러스트',
        prompt: 'children book illustration, whimsical, soft colors, storybook art',
        features: '부드러운 색감, 동글동글한 형태, 동화적 세계관',
        mood: '따뜻한, 꿈같은, 순수한',
        description: '어린이 그림책에서 볼 수 있는 따뜻하고 상상력 넘치는 일러스트레이션 스타일입니다. 부드러운 색감과 과장된 비율의 캐릭터가 특징입니다.',
        usage: [
            '그림책 삽화',
            '어린이 교육 콘텐츠',
            '캐릭터 상품',
            '벽지/인테리어'
        ],
        examplePrompts: [
            { title: '숲 속 모험', prompt: 'children book illustration, little fox exploring magical forest, soft watercolors, whimsical, dreamy atmosphere' },
            { title: '밤하늘', prompt: 'children book illustration, child looking at starry sky, gentle colors, storybook art, heartwarming' },
            { title: '동물 친구들', prompt: 'children book illustration, group of cute animals having tea party, pastel colors, rounded shapes, cozy' },
        ],
        images: [
            { src: '/images/guide/style/children-illustration-1.jpg', caption: 'children illustration example 1', prompt: 'children’s book illustration of a little girl and her fox friend exploring a magical garden with oversized flowers, soft watercolor textures, whimsical storytelling, warm gentle colors, storybook charm, Beatrix Potter inspired' }
        ]
    },

    'botanical-art': {
        title: '보태니컬 아트(Botanical Art)',
        koreanTitle: '보태니컬 아트',
        prompt: 'botanical illustration, scientific accuracy, detailed flora, natural colors',
        features: '식물의 정밀한 묘사, 과학적 정확성과 예술적 아름다움의 결합',
        mood: '자연적, 우아한, 학문적',
        description: '식물을 정밀하게 묘사하는 예술 형식으로, 과학적 정확성과 예술적 아름다움을 동시에 추구합니다. 식물도감이나 인테리어 아트에 활용됩니다.',
        usage: [
            '식물 도감',
            '인테리어 아트 프린트',
            '패턴 디자인',
            '화장품/식품 패키지'
        ],
        examplePrompts: [
            { title: '장미', prompt: 'botanical illustration of a rose, detailed petals and leaves, scientific accuracy, vintage parchment background' },
            { title: '허브 컬렉션', prompt: 'botanical art, collection of culinary herbs, labeled specimens, watercolor on cream paper, detailed' },
            { title: '열대 식물', prompt: 'botanical illustration, tropical monstera and palm leaves, detailed veins, natural green tones, scientific style' },
        ],
        images: [
            { src: '/images/guide/style/botanical-art-1.jpg', caption: 'botanical art example 1', prompt: 'botanical art scientific illustration of a blooming peony flower, precise anatomical detail, vintage naturalist style, labeled cross-section, muted parchment background, hand-painted watercolor accuracy, museum specimen quality' }
        ]
    },

    // ===== 전통 미술 사조 - 신규 =====
    'impressionism': {
        title: '인상주의(Impressionism)',
        koreanTitle: '인상주의',
        prompt: 'impressionism painting, visible brushstrokes, light and color, plein air',
        features: '눈에 보이는 붓터치, 빛과 색의 인상 포착, 야외 풍경 선호',
        mood: '밝은, 유동적, 자연적',
        description: '19세기 프랑스에서 시작된 미술 사조로, 빛과 색채의 순간적 인상을 포착하는 것이 특징입니다. 모네, 르누아르, 드가 등의 화가가 대표적입니다.',
        usage: [
            '풍경 아트',
            '인테리어 장식',
            '감성 콘텐츠',
            '아트 프린트'
        ],
        examplePrompts: [
            { title: '호수 풍경', prompt: 'impressionism painting, water lilies on a tranquil pond, visible brushstrokes, dappled sunlight, Monet style' },
            { title: '파리 거리', prompt: 'impressionism painting, rainy Paris street scene, soft focus, warm light, visible brushwork, plein air' },
            { title: '정원', prompt: 'impressionism style garden in bloom, vibrant flowers, natural light, loose brushstrokes, Renoir inspired' },
        ],
        images: [
            { src: '/images/guide/style/impressionism-1.jpg', caption: 'Painterly style', prompt: 'impressionism painting of water lilies on tranquil pond, visible loose brushstrokes, dappled sunlight on water, Monet inspired, plein air atmosphere, soft natural colors, serene beauty' }
        ]
    },

    'expressionism': {
        title: '표현주의(Expressionism)',
        koreanTitle: '표현주의',
        prompt: 'expressionism art, bold distorted forms, intense colors, emotional',
        features: '왜곡된 형태, 강렬한 색상 대비, 감정의 극적 표현',
        mood: '격렬한, 불안한, 감정적',
        description: '20세기 초 독일에서 발전한 미술 사조로, 객관적 현실보다 내면의 감정과 주관적 경험을 강렬하게 표현합니다. 뭉크, 키르히너 등이 대표적입니다.',
        usage: [
            '감정 표현 아트',
            '앨범 커버',
            '포스터 디자인',
            '실험 영상'
        ],
        examplePrompts: [
            { title: '도시 풍경', prompt: 'expressionism painting, distorted cityscape, bold angular shapes, intense contrasting colors, emotional brushwork' },
            { title: '초상', prompt: 'expressionism portrait, exaggerated features, vivid unnatural colors, thick impasto, raw emotion, Munch inspired' },
            { title: '풍경', prompt: 'expressionism landscape, twisted trees, swirling sky, intense sunset colors, dramatic mood' },
        ],
        images: [
            { src: '/images/guide/style/expressionism-1.jpg', caption: 'expressionism example 1', prompt: 'expressionism portrait of a tormented musician playing violin, distorted features conveying raw emotion, bold aggressive brushstrokes, intense contrasting colors, Edvard Munch inspired, psychological intensity, powerful inner turmoil' }
        ]
    },

    'surrealism': {
        title: '초현실주의(Surrealism)',
        koreanTitle: '초현실주의',
        prompt: 'surrealism art, dreamlike, impossible scenes, Salvador Dali style',
        features: '꿈과 무의식의 세계, 불가능한 조합, 사실적 기법으로 비현실 표현',
        mood: '몽환적, 기이한, 신비로운',
        description: '무의식과 꿈의 세계를 탐구하는 미술 사조입니다. 현실에서 불가능한 장면을 사실적 기법으로 표현하여 기이하고 신비로운 분위기를 연출합니다. 달리, 마그리트 등이 대표적입니다.',
        usage: [
            '아트 포스터',
            '앨범 커버',
            '광고 비주얼',
            'NFT 아트'
        ],
        examplePrompts: [
            { title: '녹는 시계', prompt: 'surrealism art, melting clocks draped over barren landscape, dreamlike atmosphere, Salvador Dali style' },
            { title: '떠다니는 섬', prompt: 'surrealism painting, floating islands in the sky, impossible architecture, hyper-detailed, Magritte inspired' },
            { title: '꿈의 방', prompt: 'surrealism interior, room where floor becomes ocean, fish swimming through furniture, photorealistic, dreamlike' },
        ],
        images: [
            { src: '/images/guide/style/surrealism-1.jpg', caption: 'Dreamlike scene', prompt: 'surrealism dreamlike scene of melting clocks draped over barren landscape, impossible physics, Salvador Dali inspired, hyper-detailed, warm desert tones, subconscious imagery, dreamscape' }
        ]
    },

    'art-nouveau': {
        title: '아르누보(Art Nouveau)',
        koreanTitle: '아르누보',
        prompt: 'art nouveau style, organic flowing lines, floral ornaments, Alphonse Mucha',
        features: '유기적 곡선, 꽃과 식물 모티프, 장식적 테두리와 프레임',
        mood: '우아한, 장식적, 로맨틱',
        description: '19세기 말~20세기 초의 장식 미술 양식으로, 자연에서 영감받은 유기적 곡선과 꽃 모티프가 특징입니다. 알폰스 무하의 포스터가 대표적입니다.',
        usage: [
            '포스터 디자인',
            '패키지 디자인',
            '타투 디자인',
            '주얼리 디자인'
        ],
        examplePrompts: [
            { title: '여성 초상', prompt: 'art nouveau portrait of elegant woman, flowing hair with flowers, ornate border, Alphonse Mucha style, pastel colors' },
            { title: '사계절', prompt: 'art nouveau illustration, four seasons allegory, floral ornaments, organic curves, decorative frame, Mucha poster' },
            { title: '자연 패턴', prompt: 'art nouveau pattern design, intertwining vines and lilies, golden accents, flowing organic lines, decorative' },
        ],
        images: [
            { src: '/images/guide/style/art-nouveau-1.jpg', caption: 'art nouveau example 1', prompt: 'art nouveau portrait of an elegant woman with flowing auburn hair adorned with lilies, sinuous organic lines, decorative floral border, Alphonse Mucha inspired, ornamental patterns, gold accents, ethereal beauty, poster design' }
        ]
    },

    'art-deco': {
        title: '아르데코(Art Deco)',
        koreanTitle: '아르데코',
        prompt: 'art deco style, geometric patterns, gold and black, luxurious, 1920s',
        features: '기하학적 패턴, 금색과 검은색, 직선과 지그재그, 럭셔리 무드',
        mood: '럭셔리, 화려한, 레트로 글래머',
        description: '1920~30년대에 유행한 장식 미술 양식으로, 기하학적 패턴과 대칭 구조가 특징입니다. 금색, 검은색 등 고급스러운 색상을 주로 사용하며 그레이트 개츠비의 시대상을 대표합니다.',
        usage: [
            '럭셔리 브랜딩',
            '초대장/포스터',
            '인테리어 디자인',
            '타이포그래피'
        ],
        examplePrompts: [
            { title: '건축', prompt: 'art deco skyscraper, geometric patterns, gold and black facade, 1920s New York, dramatic perspective' },
            { title: '포스터', prompt: 'art deco poster design, elegant woman silhouette, geometric sunburst, gold foil on black, vintage 1920s' },
            { title: '인테리어', prompt: 'art deco luxury hotel lobby, marble floors, geometric brass fixtures, rich velvet, golden accents' },
        ],
        images: [
            { src: '/images/guide/style/art-deco-1.jpg', caption: 'art deco example 1', prompt: 'art deco glamorous ballroom scene with elegant couple dancing, geometric patterns, gold and black color scheme, 1920s luxury, Gatsby era opulence, symmetrical ornamental design, chrome and crystal details, sophisticated nightlife' }
        ]
    },

    'baroque': {
        title: '바로크(Baroque)',
        koreanTitle: '바로크',
        prompt: 'baroque painting, dramatic chiaroscuro, rich details, ornate, Caravaggio style',
        features: '극적인 명암 대비, 풍부한 장식, 역동적 구도와 감정 표현',
        mood: '극적인, 장엄한, 화려한',
        description: '17세기 유럽의 미술 양식으로, 극적인 명암 대비(키아로스쿠로)와 역동적 구도가 특징입니다. 카라바조, 렘브란트, 루벤스 등이 대표적입니다.',
        usage: [
            '드라마틱 초상화',
            '영화 포스터',
            '고전적 아트',
            '럭셔리 브랜딩'
        ],
        examplePrompts: [
            { title: '정물화', prompt: 'baroque still life painting, fruits and flowers, dramatic chiaroscuro lighting, rich colors, Dutch Golden Age' },
            { title: '초상화', prompt: 'baroque portrait, noble figure in ornate clothing, dramatic side lighting, Rembrandt style, oil on canvas' },
            { title: '종교화', prompt: 'baroque religious painting, angelic scene, dramatic light rays, dynamic composition, Caravaggio inspired' },
        ],
        images: [
            { src: '/images/guide/style/baroque-1.jpg', caption: 'baroque example 1', prompt: 'baroque dramatic scene of an angel descending from stormy clouds with golden light rays, rich chiaroscuro, ornate flowing fabric, Caravaggio inspired intensity, theatrical divine illumination, museum masterpiece quality, oil painting texture' }
        ]
    },

    'renaissance': {
        title: '르네상스(Renaissance)',
        koreanTitle: '르네상스',
        prompt: 'Renaissance painting, classical composition, sfumato technique, Leonardo da Vinci style',
        features: '원근법, 인체 해부학적 정확성, 스푸마토 기법, 고전적 균형',
        mood: '고전적, 조화로운, 숭고한',
        description: '14~16세기 이탈리아에서 시작된 미술 양식으로, 고대 그리스-로마의 이상적 아름다움을 추구합니다. 레오나르도 다빈치, 미켈란젤로, 라파엘로가 대표적입니다.',
        usage: [
            '클래식 아트',
            '초상화',
            '교육 자료',
            '고급 브랜딩'
        ],
        examplePrompts: [
            { title: '초상화', prompt: 'Renaissance portrait painting, young woman with mysterious smile, sfumato technique, warm earth tones, da Vinci style' },
            { title: '성당 벽화', prompt: 'Renaissance ceiling fresco, mythological figures, perfect human anatomy, dramatic perspective, Michelangelo style' },
            { title: '풍경', prompt: 'Renaissance landscape painting, Tuscan countryside, golden light, classical composition, atmospheric perspective' },
        ],
        images: [
            { src: '/images/guide/style/renaissance-1.jpg', caption: 'renaissance example 1', prompt: 'renaissance portrait of a noble woman in a Florentine garden, sfumato technique, classical composition, Leonardo da Vinci inspired, rich velvet dress, serene expression, architectural columns, golden ratio proportions, tempera on panel' }
        ]
    },

    'ukiyo-e': {
        title: '우키요에(Ukiyo-e)',
        koreanTitle: '우키요에',
        prompt: 'ukiyo-e style, Japanese woodblock print, flat colors, bold outlines',
        features: '목판화 기법, 평면적 색면, 굵은 윤곽선, 일본 전통 구도',
        mood: '전통적, 우아한, 동양적',
        description: '에도시대 일본의 목판화 예술로, 풍경, 미인, 가부키 배우 등을 소재로 합니다. 가츠시카 호쿠사이의 "가나가와 앞바다의 큰 파도"가 세계적으로 유명합니다.',
        usage: [
            '동양풍 아트',
            '포스터/엽서',
            '타투 디자인',
            '패턴 디자인'
        ],
        examplePrompts: [
            { title: '파도', prompt: 'ukiyo-e style great wave, dramatic ocean waves, Mount Fuji background, Japanese woodblock print, Hokusai style' },
            { title: '벚꽃', prompt: 'ukiyo-e cherry blossom scene, geisha under sakura tree, flat colors, bold outlines, traditional Japanese art' },
            { title: '풍경', prompt: 'ukiyo-e landscape, misty mountains and lake, Japanese woodblock print style, muted colors, peaceful atmosphere' },
        ],
        images: [
            { src: '/images/guide/style/ukiyo-e-1.jpg', caption: 'ukiyo e example 1', prompt: 'ukiyo-e Japanese woodblock print of a geisha crossing a bridge during cherry blossom season, Hokusai wave patterns in background, traditional flat perspective, bold outlines, limited color palette, Edo period aesthetic, washi paper texture' }
        ]
    },

    // ===== 애니메이션/만화 계열 =====
    'anime-style': {
        title: '애니메 스타일(Anime Style)',
        koreanTitle: '애니메 스타일',
        prompt: 'anime style, cel shading, vibrant colors, detailed eyes',
        features: '큰 눈, 뾰족한 헤어, 셀 셰이딩, 과장된 표정과 감정',
        mood: '역동적, 감성적, 화려한',
        description: '일본 애니메이션의 특징적인 스타일로, 큰 눈과 과장된 표정이 특징입니다. 지브리, 신카이 마코토, 소년/소녀 만화 등 다양한 하위 스타일이 존재합니다.',
        usage: [
            '캐릭터 일러스트',
            '라이트노벨 표지',
            '게임 캐릭터',
            '팬 아트'
        ],
        subStyles: [
            { name: '지브리 스타일', prompt: 'Studio Ghibli style, hand-painted watercolor background, soft pastel colors, whimsical characters, lush nature scenery, gentle lighting', description: '자연과 모험, 따뜻한 색감의 수채화풍 배경' },
            { name: '신카이 마코토', prompt: 'Makoto Shinkai style, detailed sky with dramatic clouds, lens flare, hyper-detailed cityscape, golden hour lighting, photorealistic background with anime characters', description: '빛과 하늘의 극적 표현, 사실적 배경' },
            { name: '소년 만화(Shonen)', prompt: 'shonen anime style, dynamic action pose, intense battle scene, speed lines, glowing aura, bold colors, muscular characters, dramatic lighting', description: '액션, 우정, 역동적 배틀 장면' },
            { name: '소녀 만화(Shoujo)', prompt: 'shoujo anime style, sparkles and flower petals, soft dreamy lighting, beautiful bishounen character, pastel color palette, romantic atmosphere, delicate linework', description: '로맨스, 꽃, 반짝이는 연출' },
        ],
        examplePrompts: [
            { title: '액션 캐릭터', prompt: 'anime style warrior character, dynamic action pose, glowing sword, cel shading, vibrant colors, detailed' },
            { title: '일상 장면', prompt: 'anime style, high school girl at sunset rooftop, golden hour lighting, soft colors, Makoto Shinkai style' },
            { title: '판타지', prompt: 'anime style fantasy mage, flowing robes, magical particles, detailed eyes, sakimichan inspired' },
        ],
        images: [
            { src: '/images/guide/style/anime-style-1.jpg', caption: 'Anime character', prompt: 'anime style warrior character in dynamic battle pose, glowing magical sword, cel shading, vibrant saturated colors, detailed eyes and hair, Japanese animation quality, action scene' }
        ]
    },

    'manga': {
        title: '만화(Manga)',
        koreanTitle: '만화(망가)',
        prompt: 'manga style, black and white, screentone, dynamic panels, Japanese comic',
        features: '흑백 스크린톤, 역동적 패널 구성, 속도감 있는 선',
        mood: '역동적, 드라마틱, 긴장감',
        description: '일본 만화의 독특한 흑백 아트 스타일입니다. 스크린톤(망점)을 활용한 명암 표현과 역동적인 구도, 다양한 감정선이 특징입니다.',
        usage: [
            '만화/코믹스',
            '팬 아트',
            '스토리보드',
            '캐릭터 디자인'
        ],
        examplePrompts: [
            { title: '액션 장면', prompt: 'manga style action scene, dynamic speed lines, black and white, screentone shading, dramatic angle' },
            { title: '소녀 만화', prompt: 'shoujo manga style, romantic scene, sparkles and flowers, delicate linework, screentone, emotional' },
            { title: '배틀 장면', prompt: 'manga style intense battle, bold ink strokes, dramatic shadows, speed lines, shonen manga aesthetic' },
        ],
        images: [
            { src: '/images/guide/style/manga-1.jpg', caption: 'manga example 1', prompt: 'manga style intense close-up of a young hero with determined eyes, speed lines radiating outward, dramatic shading, screentone texture, Japanese comic panel composition, expressive hair movement, Shonen Jump quality, black and white ink' }
        ]
    },

    'cartoon-style': {
        title: '카툰 스타일(Cartoon Style)',
        koreanTitle: '카툰 스타일',
        prompt: 'cartoon style, bold outlines, exaggerated proportions, fun colors',
        features: '과장된 비율, 굵은 아웃라인, 단순화된 형태, 유머러스한 표현',
        mood: '밝은, 유쾌한, 친근한',
        description: '단순화되고 과장된 형태로 유머러스하고 친근한 느낌을 주는 스타일입니다. TV 애니메이션, 웹 콘텐츠, 광고 등에 폭넓게 사용됩니다.',
        usage: [
            '어린이 콘텐츠',
            '웹 애니메이션',
            '마스코트 디자인',
            '광고 캐릭터'
        ],
        examplePrompts: [
            { title: '캐릭터', prompt: 'cartoon style funny cat character, bold outlines, exaggerated expressions, bright colors, Cartoon Network style' },
            { title: '장면', prompt: 'cartoon style underwater adventure, colorful sea creatures, exaggerated proportions, fun and playful' },
            { title: '마스코트', prompt: 'cartoon style brand mascot, friendly robot, round shapes, bold colors, simple clean design' },
        ],
        images: [
            { src: '/images/guide/style/cartoon-style-1.jpg', caption: 'Cartoon character', prompt: 'cartoon style funny animal character with exaggerated big eyes, bold clean outlines, bright cheerful colors, Cartoon Network style, playful design, simple shapes, fun personality' }
        ]
    },

    'comic-book': {
        title: '코믹북 스타일(Comic Book)',
        koreanTitle: '코믹북 스타일',
        prompt: 'comic book style, halftone dots, bold ink lines, vibrant colors, Marvel style',
        features: '하프톤 망점, 굵은 잉크 선, 역동적 구도, 강렬한 명암',
        mood: '액션, 히어로적, 역동적',
        description: '미국 만화책의 특징적인 스타일로, 굵은 선과 망점(하프톤), 선명한 색상이 특징입니다. 마블/DC 코믹스의 슈퍼히어로 아트가 대표적입니다.',
        usage: [
            '슈퍼히어로 콘텐츠',
            '그래픽 노블',
            '영화 포스터',
            '팝 아트'
        ],
        examplePrompts: [
            { title: '히어로', prompt: 'comic book style superhero, dynamic action pose, bold ink lines, halftone dots, vibrant colors, Marvel style' },
            { title: '액션 씬', prompt: 'comic book style epic battle scene, dramatic lighting, speed lines, onomatopoeia effects, bold colors' },
            { title: '커버 아트', prompt: 'comic book cover art, hero standing on rooftop, city skyline, dramatic perspective, vintage halftone' },
        ],
        images: [
            { src: '/images/guide/style/comic-book-1.jpg', caption: 'Comic art', prompt: 'comic book style superhero standing on rooftop at night, bold ink lines, halftone dot pattern, dramatic pose, vibrant primary colors, Marvel style illustration, action ready' }
        ]
    },

    'webtoon-style': {
        title: '웹툰 스타일(Webtoon Style)',
        koreanTitle: '웹툰 스타일',
        prompt: 'webtoon style, Korean manhwa, clean linework, vibrant colors, digital comic',
        features: '깔끔한 디지털 라인워크, 풀컬러, 세로 스크롤 최적화',
        mood: '세련된, 감성적, 현대적',
        description: '한국 웹툰의 독특한 디지털 만화 스타일입니다. 깔끔한 디지털 선과 풀컬러 채색, 세로 스크롤에 최적화된 구도가 특징입니다.',
        usage: [
            '웹툰 제작',
            '캐릭터 디자인',
            'SNS 일러스트',
            '광고 콘텐츠'
        ],
        examplePrompts: [
            { title: '로맨스', prompt: 'webtoon style romantic scene, two characters under cherry blossoms, clean linework, soft pastel colors, Korean manhwa' },
            { title: '액션', prompt: 'webtoon style action scene, dynamic martial arts pose, speed effects, vibrant colors, digital comic art' },
            { title: '일상', prompt: 'webtoon style daily life scene, cafe interior, detailed background, clean digital art, warm colors' },
        ],
        images: [
            { src: '/images/guide/style/webtoon-style-1.jpg', caption: 'webtoon style example 1', prompt: 'webtoon style romantic scene of a couple sharing an umbrella in soft rain, Korean manhwa aesthetic, clean digital coloring, soft pastel tones, vertical scroll composition, emotional character expressions, sweet atmosphere, modern love story' }
        ]
    },

    // ===== 팝 컬처/현대 스타일 =====
    'pop-art': {
        title: '팝 아트(Pop Art)',
        koreanTitle: '팝 아트',
        prompt: 'pop art style, bold primary colors, Ben-Day dots, Andy Warhol style',
        features: '대중문화 이미지 차용, 원색 대비, 반복과 변주, 벤데이 도트',
        mood: '대담한, 아이코닉, 팝적',
        description: '1950~60년대 대중문화와 소비사회를 예술로 끌어올린 미술 사조입니다. 앤디 워홀, 로이 리히텐슈타인 등이 대표적이며, 원색의 대비와 반복이 특징입니다.',
        usage: [
            '포스터/아트 프린트',
            '상품 디자인',
            'SNS 콘텐츠',
            '인테리어 아트'
        ],
        examplePrompts: [
            { title: '초상', prompt: 'pop art portrait, bold primary colors, Ben-Day dots, high contrast, Andy Warhol style, screen print aesthetic' },
            { title: '오브제', prompt: 'pop art style illustration of a hamburger, bold outlines, Roy Lichtenstein dots, primary colors, comic book aesthetic' },
            { title: '반복 패턴', prompt: 'pop art repeated portrait grid, four color variations, silk screen print style, Warhol inspired, vibrant' },
        ],
        images: [
            { src: '/images/guide/style/pop-art-1.jpg', caption: 'pop art example 1', prompt: 'pop art bold portrait of a glamorous woman with bright red lips, Warhol style screen print, Ben-Day dots pattern, vibrant primary colors, comic book aesthetics, bold black outlines, repeated image variation, consumer culture icon' }
        ]
    },

    'psychedelic': {
        title: '사이키델릭(Psychedelic)',
        koreanTitle: '사이키델릭',
        prompt: 'psychedelic art, trippy visuals, vivid neon colors, kaleidoscopic patterns',
        features: '만화경 패턴, 네온 컬러, 유동적 형태, 시각적 환각 효과',
        mood: '몽환적, 트리피, 자유로운',
        description: '1960년대 히피 문화에서 발전한 시각 스타일로, 만화경 같은 패턴과 네온 컬러, 유동적 형태가 특징입니다. 음악 앨범 커버와 포스터에 많이 사용됩니다.',
        usage: [
            '앨범 커버',
            '뮤직 페스티벌 포스터',
            '패션 패턴',
            '배경화면'
        ],
        examplePrompts: [
            { title: '만화경', prompt: 'psychedelic kaleidoscopic pattern, vivid neon colors, swirling fractals, trippy visuals, 1960s poster art' },
            { title: '인물', prompt: 'psychedelic portrait, face melting into colorful patterns, rainbow hair, third eye, vibrant acid colors' },
            { title: '풍경', prompt: 'psychedelic landscape, melting mountains, rainbow sky, fractal trees, neon colors, surreal trip art' },
        ],
        images: [
            { src: '/images/guide/style/psychedelic-1.jpg', caption: 'psychedelic example 1', prompt: 'psychedelic portrait of a woman with kaleidoscopic flowing hair, swirling vibrant rainbow patterns, optical illusion fractals, 1960s counterculture aesthetic, trippy liquid colors, acid art style, mind-expanding visual experience' }
        ]
    },

    'steampunk': {
        title: '스팀펑크(Steampunk)',
        koreanTitle: '스팀펑크',
        prompt: 'steampunk style, Victorian machinery, brass gears, steam-powered, industrial',
        features: '빅토리아 시대 + 증기기관 기술, 황동 기어, 가죽과 금속',
        mood: '빈티지, 산업적, 모험적',
        description: '빅토리아 시대의 미학과 증기기관 기술이 결합된 레트로퓨처리즘 장르입니다. 황동 기어, 시계 장치, 증기 파이프 등의 요소가 특징적입니다.',
        usage: [
            '캐릭터 디자인',
            '게임/영화 컨셉',
            '코스프레 레퍼런스',
            '장신구/소품 디자인'
        ],
        examplePrompts: [
            { title: '비행선', prompt: 'steampunk airship, Victorian design, brass and copper details, steam pipes, gears, dramatic sky, detailed' },
            { title: '캐릭터', prompt: 'steampunk inventor character, top hat with goggles, mechanical arm, brass gears, Victorian clothing' },
            { title: '도시', prompt: 'steampunk city, Victorian architecture with pipes and gears, steam clouds, copper rooftops, industrial aesthetic' },
        ],
        images: [
            { src: '/images/guide/style/steampunk-1.jpg', caption: 'steampunk example 1', prompt: 'steampunk Victorian inventor woman in her workshop, brass goggles on forehead, surrounded by clockwork mechanisms and copper pipes, steam-powered gadgets, leather and metal aesthetic, gaslight ambiance, industrial revolution fantasy' }
        ]
    },

    'cyberpunk': {
        title: '사이버펑크(Cyberpunk)',
        koreanTitle: '사이버펑크',
        prompt: 'cyberpunk style, neon lights, rain-soaked streets, high tech low life, futuristic',
        features: '네온 조명, 빗속의 어두운 도시, 사이버네틱 임플란트, 홀로그램',
        mood: '디스토피아, 네온누아르, 미래적',
        description: '높은 기술력과 낮은 삶의 질(High tech, Low life)을 핵심으로 하는 SF 장르입니다. 블레이드 러너, 사이버펑크 2077 등에서 볼 수 있는 네온 빛 가득한 미래 도시가 대표적입니다.',
        usage: [
            'SF 컨셉 아트',
            '게임 비주얼',
            '영화 포스터',
            '뮤직비디오'
        ],
        examplePrompts: [
            { title: '거리', prompt: 'cyberpunk street scene, neon signs in Japanese and Korean, rain reflections, holographic ads, Blade Runner aesthetic' },
            { title: '캐릭터', prompt: 'cyberpunk female hacker, neon-lit face, cybernetic eye implant, holographic interface, dark urban background' },
            { title: '도시 전경', prompt: 'cyberpunk megacity aerial view, massive skyscrapers, flying cars, neon lights, smog, futuristic dystopia' },
        ],
        images: [
            { src: '/images/guide/style/cyberpunk-1.jpg', caption: 'cyberpunk example 1', prompt: 'cyberpunk street samurai woman with neon-lit cybernetic arm, rain-soaked Tokyo alley, holographic advertisements, purple and cyan neon reflections, Blade Runner atmosphere, futuristic dystopia, augmented reality overlays, cinematic night' }
        ]
    },

    'biopunk': {
        title: '바이오펑크(Biopunk)',
        koreanTitle: '바이오펑크',
        prompt: 'biopunk style, organic technology, bio-mechanical, living architecture',
        features: '유기적 기술, 생체 기계, 돌연변이, 바이오루미네센스',
        mood: '기이한, 유기적, 불안한',
        description: '생물학과 기술이 융합된 SF 장르입니다. 유전자 조작, 생체 기계, 유기적 건축물 등 생물학적 요소가 기술과 결합된 세계관을 표현합니다.',
        usage: [
            'SF 컨셉 아트',
            '크리처 디자인',
            '게임 환경',
            '소설 표지'
        ],
        examplePrompts: [
            { title: '생체 건축', prompt: 'biopunk living building, organic architecture, pulsating walls, bioluminescent veins, alien vegetation' },
            { title: '캐릭터', prompt: 'biopunk character, bio-mechanical augmentations, organic circuitry under skin, glowing green veins, dark lab' },
            { title: '도시', prompt: 'biopunk city, buildings grown from living tissue, organic tubes connecting towers, bioluminescent lighting' },
        ],
        images: [
            { src: '/images/guide/style/biopunk-1.jpg', caption: 'biopunk example 1', prompt: 'biopunk scientist in organic laboratory, bioluminescent plant-technology hybrid organisms growing from walls, living circuits, DNA helix structures, green-tinted biological aesthetic, genetic engineering lab, ethereal bio-luminescence' }
        ]
    },

    'solarpunk': {
        title: '솔라펑크(Solarpunk)',
        koreanTitle: '솔라펑크',
        prompt: 'solarpunk style, green architecture, solar panels, lush vegetation, utopian future',
        features: '친환경 기술, 식물과 건축의 조화, 태양광 패널, 유토피아적 비전',
        mood: '희망적, 자연친화적, 유토피아적',
        description: '지속가능한 기술과 자연이 조화를 이루는 유토피아적 미래를 그리는 장르입니다. 솔라펑크는 사이버펑크의 디스토피아에 대한 낙관적 대안으로 등장했습니다.',
        usage: [
            '건축 컨셉',
            '환경 캠페인',
            '미래 도시 비주얼',
            '교육 콘텐츠'
        ],
        examplePrompts: [
            { title: '도시', prompt: 'solarpunk city, buildings covered in lush gardens, solar panels, wind turbines, clear blue sky, utopian' },
            { title: '주거', prompt: 'solarpunk eco-home, living roof with vegetables, solar panels, natural materials, surrounded by nature' },
            { title: '교통', prompt: 'solarpunk public transit, solar-powered train, green corridors, flowers along tracks, bright sunny day' },
        ],
        images: [
            { src: '/images/guide/style/solarpunk-1.jpg', caption: 'solarpunk example 1', prompt: 'solarpunk woman tending a rooftop garden in a green utopian city, solar panel buildings covered in lush vegetation, clean energy windmills, optimistic bright sunshine, sustainable architecture, harmonious nature-technology fusion, hopeful future' }
        ]
    },

    'retro-vintage': {
        title: '레트로 빈티지(Retro Vintage)',
        koreanTitle: '레트로 빈티지',
        prompt: 'retro vintage style, 1950s aesthetic, muted colors, aged texture, nostalgic',
        features: '바랜 색감, 필름 그레인, 레트로 타이포그래피, 향수적 분위기',
        mood: '향수적, 따뜻한, 클래식',
        description: '1950~70년대의 디자인 미학을 재현하는 스타일입니다. 바랜 색상, 필름 그레인, 레트로 타이포그래피 등으로 향수와 따뜻함을 전달합니다.',
        usage: [
            '브랜드 디자인',
            '카페/식당 메뉴',
            '포스터/전단',
            '패키지 디자인'
        ],
        examplePrompts: [
            { title: '포스터', prompt: 'retro vintage travel poster, 1950s style, muted pastel colors, grain texture, classic typography, nostalgic' },
            { title: '광고', prompt: 'retro vintage advertisement, 1960s diner, milkshake and burger, warm tones, aged paper texture' },
            { title: '차량', prompt: 'retro vintage car illustration, classic 1957 Chevrolet, chrome details, pastel background, 50s aesthetic' },
        ],
        images: [
            { src: '/images/guide/style/retro-vintage-1.jpg', caption: 'retro vintage example 1', prompt: 'retro vintage 1950s diner scene, waitress in classic uniform serving milkshakes, chrome barstools, checkered floor, warm nostalgic color grading, Kodachrome film aesthetic, classic Americana, neon open sign, jukebox in corner' }
        ]
    },

    'synthwave': {
        title: '신스웨이브(Synthwave)',
        koreanTitle: '신스웨이브',
        prompt: 'synthwave style, retro 80s, neon purple and pink, grid landscape, sunset',
        features: '80년대 레트로 미래, 네온 퍼플/핑크, 그리드 지형, 크롬 텍스트',
        mood: '레트로퓨처, 네온, 노스탤직',
        description: '1980년대의 레트로 미래 미학을 현대적으로 재해석한 스타일입니다. 네온 퍼플과 핑크, 와이어프레임 그리드, 석양 그라디언트가 아이코닉한 요소입니다.',
        usage: [
            '앨범 커버',
            '게임 비주얼',
            '유튜브 썸네일',
            '배경화면'
        ],
        examplePrompts: [
            { title: '레트로 풍경', prompt: 'synthwave landscape, neon grid floor, retro sun setting behind mountains, purple and pink sky, 80s aesthetic' },
            { title: '자동차', prompt: 'synthwave style DeLorean driving on neon grid road, palm trees, retro 80s sunset, chrome reflections' },
            { title: '도시', prompt: 'synthwave city skyline, neon lights, retro futuristic, chrome buildings, purple pink gradient sky, 1980s' },
        ],
        images: [
            { src: '/images/guide/style/synthwave-1.jpg', caption: 'synthwave example 1', prompt: 'synthwave retrowave scene of a DeLorean driving on neon grid highway toward sunset, chrome reflections, pink and purple gradient sky, palm tree silhouettes, 1980s aesthetic, VHS retro-futurism, outrun style, electronic music atmosphere' }
        ]
    },

    'minimalism': {
        title: '미니멀리즘(Minimalism)',
        koreanTitle: '미니멀리즘',
        prompt: 'minimalism art, simple composition, negative space, limited palette, clean',
        features: '최소한의 요소, 넓은 여백, 제한된 색상 팔레트, 기하학적 형태',
        mood: '고요한, 세련된, 명상적',
        description: '불필요한 요소를 극한까지 제거하고 본질만 남기는 예술 스타일입니다. 넓은 여백과 단순한 형태, 제한된 색상으로 강력한 시각적 임팩트를 만들어냅니다.',
        usage: [
            '브랜딩/로고',
            '인테리어 아트',
            '앱 UI 디자인',
            '포토 에디팅'
        ],
        examplePrompts: [
            { title: '풍경', prompt: 'minimalism landscape, single tree on horizon, vast empty sky, muted earth tones, negative space, serene' },
            { title: '오브제', prompt: 'minimalism still life, single red apple on white surface, clean composition, soft shadow, simple beauty' },
            { title: '건축', prompt: 'minimalism architecture, concrete and glass, clean geometric lines, negative space, natural light, Tadao Ando' },
        ],
        images: [
            { src: '/images/guide/style/minimalism-1.jpg', caption: 'Simple forms', prompt: 'minimalism art of a single tree on vast empty horizon, muted earth tones, extensive negative space, serene contemplative mood, simple composition, clean aesthetic, quiet beauty' }
        ]
    },

    'maximalism': {
        title: '맥시멀리즘(Maximalism)',
        koreanTitle: '맥시멀리즘',
        prompt: 'maximalism art, ornate details, rich patterns, layered textures, vibrant colors',
        features: '과잉 장식, 패턴 위에 패턴, 풍부한 텍스처와 색상, 화려한 레이어링',
        mood: '화려한, 과잉, 풍부한',
        description: '미니멀리즘과 정반대로, 더 많은 요소를 더 화려하게 채우는 스타일입니다. 패턴과 텍스처, 색상이 겹겹이 쌓여 압도적인 시각적 풍성함을 만들어냅니다.',
        usage: [
            '패션 디자인',
            '인테리어 장식',
            '앨범 아트',
            '축제/이벤트 비주얼'
        ],
        examplePrompts: [
            { title: '인테리어', prompt: 'maximalism interior design, layered patterns, rich velvet, gold accents, plants everywhere, eclectic mix, vibrant' },
            { title: '패션', prompt: 'maximalism fashion illustration, layered patterns and prints, bold jewelry, mixed textures, rich colors, opulent' },
            { title: '정물', prompt: 'maximalism still life, overflowing flowers, fruits, fabrics, ornate vases, rich textures, Dutch Golden Age excess' },
        ],
        images: [
            { src: '/images/guide/style/maximalism-1.jpg', caption: 'maximalism example 1', prompt: 'maximalism ornate Victorian parlor overflowing with eclectic treasures, layered Persian rugs, botanical wallpaper, crystal chandeliers, exotic artifacts, velvet furniture, every surface decorated, rich saturated colors, opulent visual feast' }
        ]
    },

    // ===== 캐릭터/피규어/토이 계열 ⭐ =====
    'pixar-style': {
        title: '픽사 스타일(Pixar Style)',
        koreanTitle: '픽사 스타일',
        prompt: 'Pixar style 3D character, expressive eyes, smooth render, colorful, cute',
        features: '큰 눈의 표현력, 부드러운 3D 렌더링, 과장된 비율, 따뜻한 조명',
        mood: '따뜻한, 감동적, 귀여운',
        description: '픽사 애니메이션의 독특한 3D 캐릭터 스타일입니다. 큰 눈으로 풍부한 감정을 전달하며, 부드러운 표면 질감과 따뜻한 조명이 특징입니다.',
        usage: [
            '캐릭터 디자인',
            '어린이 콘텐츠',
            'SNS 프로필',
            '광고 캐릭터'
        ],
        examplePrompts: [
            { title: '캐릭터', prompt: 'Pixar style 3D character, cute little chef with big eyes, holding a spoon, kitchen background, warm lighting' },
            { title: '동물', prompt: 'Pixar style 3D puppy, big expressive eyes, fluffy fur, sitting in garden, soft sunlight, adorable' },
            { title: '장면', prompt: 'Pixar style 3D scene, toy workshop, colorful toys on shelves, warm cozy lighting, magical atmosphere' },
        ],
        images: [
            { src: '/images/guide/style/pixar-style-1.jpg', caption: 'pixar style example 1', prompt: 'Pixar style adorable robot character with big expressive eyes discovering a butterfly, subsurface scattering skin, detailed fabric textures, warm cinematic lighting, heartwarming moment, 3D animation quality, emotional storytelling, render' }
        ]
    },

    'disney-style': {
        title: '디즈니 스타일(Disney Style)',
        koreanTitle: '디즈니 스타일',
        prompt: 'Disney animation style, princess aesthetic, magical, enchanted, vibrant colors',
        features: '우아한 캐릭터 비율, 마법적 요소, 뮤지컬 같은 화려함',
        mood: '마법적, 로맨틱, 동화적',
        description: '디즈니 애니메이션의 클래식한 아트 스타일입니다. 우아한 캐릭터 디자인, 마법적 이펙트, 풍부한 색감으로 동화 같은 세계를 구현합니다.',
        usage: [
            '캐릭터 디자인',
            '동화 일러스트',
            '파티 초대장',
            '키즈 콘텐츠'
        ],
        examplePrompts: [
            { title: '공주', prompt: 'Disney animation style princess, flowing magical dress, enchanted castle background, sparkles, vibrant colors' },
            { title: '동물', prompt: 'Disney style anthropomorphic fox, charming expression, forest setting, magical lighting, warm colors' },
            { title: '마법 장면', prompt: 'Disney style magical transformation scene, swirling sparkles, fairy godmother, dramatic lighting, enchanted' },
        ],
        images: [
            { src: '/images/guide/style/disney-style-1.jpg', caption: 'disney style example 1', prompt: 'Disney animation style brave princess with flowing magical hair standing on a cliff overlooking an enchanted kingdom, sparkle effects, warm sunset colors, musical moment, classic Disney magic, animated feature film quality' }
        ]
    },

    'ghibli-style': {
        title: '지브리 스타일(Ghibli Style)',
        koreanTitle: '지브리 스타일',
        prompt: 'Studio Ghibli style, hand-painted, lush nature, whimsical, Miyazaki inspired',
        features: '수작업 느낌의 배경, 풍성한 자연 묘사, 동화적 세계관, 따뜻한 색감',
        mood: '평화로운, 동화적, 자연친화적',
        description: '스튜디오 지브리(미야자키 하야오)의 독특한 애니메이션 스타일입니다. 섬세하게 그려진 자연 배경, 따뜻한 색감, 동화적 세계관이 특징입니다.',
        usage: [
            '풍경 일러스트',
            '배경화면',
            '동화적 캐릭터',
            'SNS 콘텐츠'
        ],
        examplePrompts: [
            { title: '풍경', prompt: 'Studio Ghibli style countryside landscape, lush green hills, fluffy clouds, wildflowers, warm sunlight, hand-painted' },
            { title: '캐릭터', prompt: 'Ghibli style young girl with hat, standing in flower field, wind blowing, warm colors, Miyazaki inspired' },
            { title: '도시', prompt: 'Studio Ghibli style European town, cobblestone streets, cozy bakery, laundry hanging, peaceful atmosphere' },
        ],
        images: [
            { src: '/images/guide/style/ghibli-style-1.jpg', caption: 'ghibli style example 1', prompt: 'Studio Ghibli style young girl sitting on a grassy hillside watching clouds, peaceful countryside with wildflowers, gentle warm breeze, Hayao Miyazaki inspired, hand-painted watercolor background, nostalgic summer day, serene contemplation' }
        ]
    },

    'chibi-style': {
        title: '치비 스타일(Chibi Style)',
        koreanTitle: '치비 스타일',
        prompt: 'chibi style, super deformed, big head small body, cute, kawaii',
        features: '머리:몸 비율 1:1~1:2, 극도로 단순화된 손발, 큰 눈',
        mood: '귀여운, 장난스러운, 아기자기한',
        description: '일본의 SD(Super Deformed) 스타일로, 머리를 크게 몸을 작게 그리는 캐릭터 스타일입니다. 극도로 귀여운 비율과 단순화된 디테일이 특징입니다.',
        usage: [
            '스티커/이모지',
            '굿즈 디자인',
            '팬 아트',
            'SNS 아이콘'
        ],
        examplePrompts: [
            { title: '전사', prompt: 'chibi style knight character, big head small body, cute armor, holding tiny sword, sparkly eyes, kawaii' },
            { title: '마법사', prompt: 'chibi style witch, oversized hat, big sparkly eyes, tiny body, magical stars, pastel colors, adorable' },
            { title: '그룹', prompt: 'chibi style group of friends, super deformed proportions, matching outfits, cute poses, colorful background' },
        ],
        images: [
            { src: '/images/guide/style/chibi-style-1.jpg', caption: 'chibi style example 1', prompt: 'chibi style cute warrior character with oversized head and tiny body, adorable determined expression, miniature sword and shield, sparkle effects, pastel background, super deformed anime proportions, kawaii battle pose, sticker design' }
        ]
    },

    'kawaii-style': {
        title: '카와이 스타일(Kawaii Style)',
        koreanTitle: '카와이 스타일',
        prompt: 'kawaii style, pastel colors, cute faces on objects, rounded shapes, adorable',
        features: '파스텔 색상, 모든 것에 얼굴 표정, 둥글둥글한 형태, 하트/별 장식',
        mood: '사랑스러운, 달콤한, 행복한',
        description: '일본의 "귀여움" 문화를 반영한 스타일로, 모든 사물에 귀여운 얼굴을 그려넣고 파스텔 톤으로 채색하는 것이 특징입니다. 산리오 캐릭터가 대표적입니다.',
        usage: [
            '캐릭터 상품',
            '스티커 디자인',
            '카페/베이커리 브랜딩',
            'SNS 콘텐츠'
        ],
        examplePrompts: [
            { title: '음식', prompt: 'kawaii style cute food characters, smiling donut and cupcake, pastel pink background, sparkles, adorable faces' },
            { title: '동물', prompt: 'kawaii style round cat, big sparkly eyes, tiny paws, pastel rainbow background, hearts and stars, Sanrio style' },
            { title: '오브제', prompt: 'kawaii style cute stationery characters, smiling pencil and notebook, pastel colors, bubble letters, adorable' },
        ],
        images: [
            { src: '/images/guide/style/kawaii-style-1.jpg', caption: 'kawaii style example 1', prompt: 'kawaii style adorable cat character wearing a tiny chef hat baking cupcakes, sparkly eyes, pastel pink kitchen, heart-shaped decorations, Japanese cute aesthetic, round soft shapes, happy expression, sweet candy colors, plushie quality' }
        ]
    },

    'funko-pop': {
        title: '펀코팝(Funko Pop)',
        koreanTitle: '펀코팝',
        prompt: 'Funko Pop vinyl figure style, oversized head, black dot eyes, small body, collectible toy',
        features: '거대한 정사각 머리, 검은 점 눈, 작은 몸체, 비닐 피규어 질감',
        mood: '수집적, 팝적, 장난스러운',
        description: '펀코팝 비닐 피규어의 독특한 디자인 스타일입니다. 정사각형의 큰 머리, 검은 점으로 된 눈, 작은 몸체로 다양한 캐릭터를 일관된 스타일로 표현합니다.',
        usage: [
            '피규어/굿즈 디자인',
            '팬 아트',
            'SNS 프로필',
            '선물/기념품'
        ],
        examplePrompts: [
            { title: '캐릭터', prompt: 'Funko Pop vinyl figure style, samurai warrior, oversized square head, black dot eyes, small body, box packaging' },
            { title: '유명인', prompt: 'Funko Pop style figure of a rock musician, guitar, big head, dot eyes, vinyl toy aesthetic, collectible box' },
            { title: '판타지', prompt: 'Funko Pop style dragon figure, cute oversized head, tiny wings, vinyl material, collectible display box' },
        ],
        images: [
            { src: '/images/guide/style/funko-pop-1.jpg', caption: 'funko pop example 1', prompt: 'Funko Pop vinyl figure of a detective in trench coat, oversized square head, tiny body, glossy black eyes, stylized proportions, collectible toy design, product photography on white background, boxed figure aesthetic, vinyl texture' }
        ]
    },

    'blind-box': {
        title: '블라인드 박스(Blind Box)',
        koreanTitle: '블라인드 박스 / 팝마트',
        prompt: 'blind box toy, Pop Mart style, designer toy, vinyl figure, cute character',
        features: '디자이너 토이 감성, 매끈한 비닐 질감, 몽글몽글한 형태, 수집 요소',
        mood: '트렌디, 수집적, 귀여운',
        description: 'Pop Mart 등의 디자이너 토이 블라인드 박스 스타일입니다. 매끈한 비닐 질감의 귀여운 캐릭터들이 특징이며, 최근 AI 이미지 생성에서 가장 인기 있는 스타일 중 하나입니다.',
        usage: [
            '캐릭터 디자인',
            '굿즈/피규어',
            'SNS 콘텐츠',
            '브랜드 콜라보'
        ],
        examplePrompts: [
            { title: '동물', prompt: 'blind box toy, Pop Mart style cute bunny character, vinyl figure, pastel colors, sweet expression, designer toy' },
            { title: '직업', prompt: 'blind box style astronaut character, round helmet, chibi proportions, vinyl material, Pop Mart aesthetic, cute' },
            { title: '시리즈', prompt: 'blind box collection, four seasons themed characters, consistent style, pastel vinyl figures, Pop Mart inspired' },
        ],
        images: [
            { src: '/images/guide/style/blind-box-1.jpg', caption: 'blind box example 1', prompt: 'blind box collectible designer toy of a dreamy astronaut character sitting on a crescent moon, soft matte finish, pastel space colors, Pop Mart style, contemporary art toy design, collectible vinyl figure, cute minimal expression' }
        ]
    },

    'gashapon': {
        title: '가샤폰(Gashapon)',
        koreanTitle: '가샤폰 / 캡슐토이',
        prompt: 'gashapon capsule toy, miniature figure, detailed small scale, Japanese toy',
        features: '작은 스케일의 정교한 디테일, 캡슐에서 나온 미니어처, 일본 토이 감성',
        mood: '정교한, 수집적, 아기자기한',
        description: '일본 캡슐토이(가챠) 스타일의 미니어처 피규어입니다. 작은 크기에도 정교한 디테일이 특징이며, 동물, 음식, 캐릭터 등 다양한 주제로 제작됩니다.',
        usage: [
            '미니어처 피규어',
            '수집용 토이',
            'SNS 사진',
            '캐릭터 상품'
        ],
        examplePrompts: [
            { title: '고양이', prompt: 'gashapon capsule toy, miniature sleeping cat figure, detailed fur texture, small scale, Japanese toy aesthetic' },
            { title: '음식', prompt: 'gashapon miniature food, tiny detailed sushi set, realistic textures, Japanese capsule toy, on coin for scale' },
            { title: '동물', prompt: 'gashapon toy collection, zoo animals in funny poses, miniature detailed figures, capsule machine background' },
        ],
        images: [
            { src: '/images/guide/style/gashapon-1.jpg', caption: 'gashapon example 1', prompt: 'gashapon capsule toy miniature of a sushi chef cat character, small detailed figurine, Japanese vending machine toy quality, cute animal character, translucent capsule display, collectible charm, detailed paint application, tiny accessories' }
        ]
    },

    'enamel-pin': {
        title: '에나멜 핀(Enamel Pin)',
        koreanTitle: '에나멜 핀',
        prompt: 'enamel pin design, gold metal outline, flat fill colors, hard enamel, badge',
        features: '금속 테두리(금/은), 평면 채색, 반짝이는 에나멜 질감, 뱃지 형태',
        mood: '심플, 아기자기한, 수집적',
        description: '에나멜 핀(배지) 스타일의 디자인입니다. 금속 테두리로 구획된 영역에 평면적으로 색을 채우는 것이 특징이며, 레트로하면서도 트렌디한 감성입니다.',
        usage: [
            '핀/뱃지 디자인',
            '브랜드 굿즈',
            '스티커 디자인',
            '아이콘 디자인'
        ],
        examplePrompts: [
            { title: '우주', prompt: 'enamel pin design, astronaut cat floating in space, gold metal outlines, flat fill colors, hard enamel finish' },
            { title: '자연', prompt: 'enamel pin design, mountain landscape with sunrise, gold border, limited color palette, badge style' },
            { title: '음식', prompt: 'enamel pin design, cute ramen bowl, gold metal outline, flat colors, kawaii face, hard enamel badge' },
        ],
        images: [
            { src: '/images/guide/style/enamel-pin-1.jpg', caption: 'enamel pin example 1', prompt: 'enamel pin design of a magical cat sitting on a stack of books under starry sky, gold metal outline, vibrant fill colors, lapel pin aesthetic, flat graphic style, hard enamel smooth surface, cute collectible accessory, pin mockup' }
        ]
    },

    'knitted-doll': {
        title: '니트 인형(Knitted Doll)',
        koreanTitle: '니트 인형 / 크로셰',
        prompt: 'knitted doll, crochet amigurumi, yarn texture, handmade craft, soft toy',
        features: '뜨개질/크로셰 질감, 실의 꼬임이 보이는 텍스처, 수공예 느낌',
        mood: '따뜻한, 수공예적, 포근한',
        description: '뜨개질(크로셰/아미구루미)로 만든 인형 스타일입니다. 실의 질감과 꼬임이 선명하게 보이며, 손으로 만든 듯한 따뜻한 느낌이 특징입니다.',
        usage: [
            '캐릭터 굿즈',
            'SNS 콘텐츠',
            '핸드메이드 패턴',
            '어린이 콘텐츠'
        ],
        examplePrompts: [
            { title: '동물', prompt: 'crochet amigurumi bear, yarn texture visible, handmade knitted doll, soft pastel colors, studio photography' },
            { title: '캐릭터', prompt: 'knitted doll character, cute astronaut, crochet texture, yarn material, miniature spacesuit, handcraft aesthetic' },
            { title: '세트', prompt: 'amigurumi farm animals collection, knitted cow sheep pig chicken, yarn texture, cozy handmade feel' },
        ],
        images: [
            { src: '/images/guide/style/knitted-doll-1.jpg', caption: 'knitted doll example 1', prompt: 'knitted amigurumi doll of a cozy fox wearing a scarf, handmade crochet texture, yarn material visible, button eyes, stuffed plush toy, warm autumn colors, handcraft aesthetic, soft cuddly character, macro photography, cotton yarn detail' }
        ]
    },

    'lego-style': {
        title: '레고 스타일(LEGO Style)',
        koreanTitle: '레고 스타일',
        prompt: 'LEGO style, brick-built scene, minifigure characters, plastic texture, colorful bricks',
        features: '블록/브릭 조립 구조, 미니피규어 캐릭터, 플라스틱 질감, 원색 컬러',
        mood: '장난스러운, 창의적, 향수적',
        description: '레고 브릭으로 구성된 장면과 캐릭터를 표현하는 스타일입니다. 블록으로 조립된 형태와 플라스틱 질감, 미니피규어의 독특한 비율이 특징입니다.',
        usage: [
            '키즈 콘텐츠',
            'SNS 콘텐츠',
            '광고/프로모션',
            '교육 자료'
        ],
        examplePrompts: [
            { title: '도시', prompt: 'LEGO style city scene, brick-built buildings, minifigure citizens, colorful bricks, plastic texture, toy photography' },
            { title: '캐릭터', prompt: 'LEGO minifigure style wizard, plastic brick texture, cape and staff, yellow skin, classic LEGO aesthetic' },
            { title: '풍경', prompt: 'LEGO style medieval castle, brick-built walls and towers, minifigure knights, colorful bricks, detailed set' },
        ],
        images: [
            { src: '/images/guide/style/lego-style-1.jpg', caption: 'lego style example 1', prompt: 'LEGO minifigure scene of a pirate captain on a brick-built ship deck, yellow skin, claw hand, detailed LEGO brick construction, toy photography, plastic texture, colorful bricks, official LEGO set aesthetic, playful adventure scene' }
        ]
    },

    'toy-photography': {
        title: '토이 포토그래피(Toy Photography)',
        koreanTitle: '토이 포토그래피',
        prompt: 'toy photography, miniature figure in real environment, tilt-shift, macro lens',
        features: '실제 환경에 미니어처 피규어 배치, 매크로 렌즈 촬영, 틸트시프트 효과',
        mood: '판타지적, 유희적, 몰입적',
        description: '미니어처 피규어나 장난감을 실제 환경에 배치하고 촬영하는 사진 스타일입니다. 매크로 렌즈와 조명 연출로 장난감이 마치 실제 크기인 것처럼 보이게 합니다.',
        usage: [
            '인스타그램 콘텐츠',
            '광고/프로모션',
            '아트 프로젝트',
            '스토리텔링'
        ],
        examplePrompts: [
            { title: '모험', prompt: 'toy photography, action figure exploring mossy forest floor, macro lens, shallow depth of field, dramatic lighting' },
            { title: '우주', prompt: 'toy photography, tiny astronaut figure on sandy terrain, stars in background, tilt-shift, cinematic mood' },
            { title: '일상', prompt: 'toy photography, miniature figure reading book on real coffee cup rim, bokeh background, warm lighting' },
        ],
        images: [
            { src: '/images/guide/style/toy-photography-1.jpg', caption: 'toy photography example 1', prompt: 'toy photography of action figures in miniature cityscape, forced perspective making toys look life-sized, dramatic studio lighting, tilt-shift bokeh, creative diorama, detailed miniature world, cinematic toy scene, macro lens quality' }
        ]
    },

    'crystal-ball': {
        title: '크리스탈 볼(Crystal Ball)',
        koreanTitle: '크리스탈 볼 / 스노우글로브',
        prompt: 'inside a crystal ball, snow globe, miniature world, glass sphere, magical',
        features: '유리 구체 안의 미니어처 세계, 눈/반짝이 파티클, 굴절 효과',
        mood: '마법적, 동화적, 환상적',
        description: '스노우글로브나 크리스탈 볼 안에 담긴 미니어처 세계를 표현하는 스타일입니다. 유리 구체의 굴절 효과와 내부의 작은 세계가 만들어내는 환상적 분위기가 특징입니다.',
        usage: [
            'SNS 콘텐츠',
            '시즌 프로모션',
            '기념품 디자인',
            '판타지 아트'
        ],
        examplePrompts: [
            { title: '겨울 마을', prompt: 'inside a crystal snow globe, miniature winter village, falling snow particles, warm cabin lights, magical atmosphere' },
            { title: '벚꽃', prompt: 'crystal ball containing cherry blossom garden, pink petals floating, miniature Japanese temple, glass refraction' },
            { title: '우주', prompt: 'glass sphere containing galaxy and planets, cosmic dust particles, nebula colors, miniature universe, magical' },
        ],
        images: [
            { src: '/images/guide/style/crystal-ball-1.jpg', caption: 'crystal ball example 1', prompt: 'crystal ball glass sphere containing a miniature winter village with glowing lights, snow globe effect, magical refraction and distortion, bokeh lights background, enchanting miniature world, glass optical effects, holiday magic, detailed' }
        ]
    },

    // ===== 사진/영화 스타일 =====
    'photorealism': {
        title: '포토리얼리즘(Photorealism)',
        koreanTitle: '포토리얼리즘',
        prompt: 'photorealistic, ultra realistic, 8K, DSLR quality, natural lighting',
        features: '사진과 구분 불가능한 수준의 사실성, 자연스러운 조명과 질감',
        mood: '사실적, 자연스러운, 고품질',
        description: '사진과 구분할 수 없을 정도로 사실적인 이미지를 생성하는 스타일입니다. 인물, 제품, 풍경 등 모든 주제에서 최대한 자연스러운 결과물을 목표로 합니다.',
        usage: [
            '제품 사진',
            '인물 포트레이트',
            '건축 시각화',
            '광고 비주얼'
        ],
        examplePrompts: [
            { title: '인물', prompt: 'photorealistic portrait, young woman in natural light, freckles and skin texture visible, DSLR quality, 85mm lens' },
            { title: '제품', prompt: 'photorealistic product shot, luxury watch on marble surface, studio lighting, 8K detail, commercial photography' },
            { title: '풍경', prompt: 'photorealistic landscape, Norwegian fjord at golden hour, ultra realistic water reflections, 8K resolution' },
        ],
        images: [
            { src: '/images/guide/style/photorealism-1.jpg', caption: 'photorealism example 1', prompt: 'photorealistic portrait of a weathered fisherman with deep wrinkles and kind eyes, salt-and-pepper beard, morning harbor light, every skin pore visible, 8K ultra-detailed, medium format camera quality, National Geographic portrait' }
        ]
    },

    'cinematic': {
        title: '시네마틱(Cinematic)',
        koreanTitle: '시네마틱',
        prompt: 'cinematic shot, movie still, anamorphic lens, dramatic lighting, color grading',
        features: '영화적 화면 비율, 드라마틱 라이팅, 시네마 컬러 그레이딩, 보케',
        mood: '영화적, 드라마틱, 감성적',
        description: '영화의 한 장면처럼 보이는 이미지를 생성하는 스타일입니다. 와이드 화면 비율, 시네마 컬러 그레이딩, 렌즈 플레어 등의 영화적 요소를 활용합니다.',
        usage: [
            '영화 스틸컷 레퍼런스',
            '뮤직비디오 컨셉',
            '포토 에디팅',
            '스토리보드'
        ],
        examplePrompts: [
            { title: '드라마', prompt: 'cinematic shot, lone figure walking in rain-soaked city street, neon reflections, anamorphic lens flare, moody color grading' },
            { title: 'SF', prompt: 'cinematic movie still, astronaut discovering alien artifact, volumetric light, IMAX quality, Villeneuve style' },
            { title: '로맨스', prompt: 'cinematic scene, couple at sunset beach, golden hour, lens flare, shallow depth of field, warm color grading' },
        ],
        images: [
            { src: '/images/guide/style/cinematic-1.jpg', caption: 'cinematic example 1', prompt: 'cinematic wide frame of a lone cowboy riding through Monument Valley at golden hour, anamorphic lens flare, 2.39:1 aspect ratio, warm desaturated color grade, dust particles in light, Roger Deakins cinematography style, epic Western' }
        ]
    },

    'film-noir': {
        title: '필름 누아르(Film Noir)',
        koreanTitle: '필름 누아르',
        prompt: 'film noir style, black and white, high contrast shadows, venetian blind lighting, detective',
        features: '고대비 흑백, 베네치안 블라인드 조명, 극적인 그림자, 하드보일드 무드',
        mood: '미스터리, 어두운, 긴장감',
        description: '1940~50년대 할리우드의 범죄/추리 영화 스타일입니다. 극적인 흑백 대비, 베네치안 블라인드를 통한 빛줄기, 어두운 분위기가 특징입니다.',
        usage: [
            '추리/범죄 컨셉',
            '포스터 디자인',
            '포토 에디팅',
            '스토리텔링'
        ],
        examplePrompts: [
            { title: '탐정', prompt: 'film noir detective in dark office, venetian blind shadows on face, cigarette smoke, black and white, high contrast' },
            { title: '거리', prompt: 'film noir rainy city street, lone figure under streetlight, puddle reflections, dramatic shadows, 1940s aesthetic' },
            { title: '팜므파탈', prompt: 'film noir femme fatale, dramatic side lighting, cigarette holder, mysterious gaze, black and white, vintage' },
        ],
        images: [
            { src: '/images/guide/style/film-noir-1.jpg', caption: 'film noir example 1', prompt: 'film noir detective standing under a streetlamp in fog-filled alley, venetian blind shadows across face, femme fatale silhouette in doorway, high contrast black and white, 1940s mystery atmosphere, cigarette smoke, hard-boiled drama' }
        ]
    },

    'documentary': {
        title: '다큐멘터리(Documentary)',
        koreanTitle: '다큐멘터리',
        prompt: 'documentary photography style, candid moment, natural light, authentic, photojournalism',
        features: '자연스러운 순간 포착, 연출되지 않은 진정성, 저널리즘적 시선',
        mood: '진실한, 자연스러운, 서사적',
        description: '다큐멘터리 사진/영상의 자연스럽고 진정성 있는 스타일입니다. 연출되지 않은 순간의 포착과 사실적인 표현을 추구합니다.',
        usage: [
            '포토저널리즘',
            '브랜드 스토리텔링',
            '사회적 메시지',
            '여행 콘텐츠'
        ],
        examplePrompts: [
            { title: '거리', prompt: 'documentary style street photography, candid moment in busy market, natural light, authentic, photojournalism' },
            { title: '인물', prompt: 'documentary portrait, elderly craftsman at work, weathered hands, natural window light, authentic emotion' },
            { title: '풍경', prompt: 'documentary style landscape, remote fishing village at dawn, misty atmosphere, natural colors, National Geographic' },
        ],
        images: [
            { src: '/images/guide/style/documentary-1.jpg', caption: 'documentary example 1', prompt: 'documentary style candid portrait of an elderly artisan crafting pottery by hand, natural available light, authentic moment captured, photojournalism quality, worn hands shaping clay, cultural preservation, raw unposed truth, editorial' }
        ]
    },

    // ===== 특수 효과 스타일 =====
    'glitch-art': {
        title: '글리치 아트(Glitch Art)',
        koreanTitle: '글리치 아트',
        prompt: 'glitch art, digital distortion, RGB shift, corrupted data, cybernetic',
        features: 'RGB 색상 분리, 픽셀 왜곡, 데이터 손상 효과, 디지털 노이즈',
        mood: '디지털, 불안정한, 실험적',
        description: '디지털 데이터의 오류와 왜곡을 의도적으로 활용하는 예술 스타일입니다. RGB 색상 분리, 픽셀 깨짐, 스캔라인 등의 효과로 디지털 시대의 불안정성을 표현합니다.',
        usage: [
            '앨범 커버',
            '뮤직비디오',
            'SNS 콘텐츠',
            'VJ 비주얼'
        ],
        examplePrompts: [
            { title: '초상', prompt: 'glitch art portrait, RGB color shift, digital distortion, corrupted pixels, cyberpunk aesthetic, databending' },
            { title: '풍경', prompt: 'glitch art landscape, digital corruption, scanlines, pixel sorting, broken data aesthetic, vibrant' },
            { title: '타이포', prompt: 'glitch art typography, distorted text, RGB split, VHS tracking error, digital noise, retro tech aesthetic' },
        ],
        images: [
            { src: '/images/guide/style/glitch-art-1.jpg', caption: 'glitch art example 1', prompt: 'glitch art portrait of a woman with digital corruption effects, RGB color channel splitting, data moshing artifacts, pixel sorting distortion, cybernetic aesthetic, broken digital signal, vaporwave color palette, corrupted beauty' }
        ]
    },

    'double-exposure': {
        title: '이중 노출(Double Exposure)',
        koreanTitle: '이중 노출',
        prompt: 'double exposure effect, two images merged, silhouette filled with landscape, artistic blend',
        features: '두 이미지의 예술적 합성, 실루엣 안에 다른 장면, 투명한 레이어링',
        mood: '몽환적, 예술적, 서정적',
        description: '두 장의 이미지를 겹쳐 하나의 합성 이미지를 만드는 사진 기법입니다. 인물의 실루엣 안에 풍경이나 패턴을 채워넣는 것이 대표적입니다.',
        usage: [
            '아트 포토',
            '영화 포스터',
            '앨범 커버',
            '브랜드 비주얼'
        ],
        examplePrompts: [
            { title: '인물+자연', prompt: 'double exposure, woman silhouette filled with autumn forest, leaves and branches, artistic blend, ethereal' },
            { title: '인물+도시', prompt: 'double exposure effect, man profile merged with city skyline at night, light trails, moody atmosphere' },
            { title: '동물+자연', prompt: 'double exposure, wolf silhouette filled with northern forest and aurora borealis, mystical, artistic' },
        ],
        images: [
            { src: '/images/guide/style/double-exposure-1.jpg', caption: 'double exposure example 1', prompt: 'double exposure portrait of a woman’s profile merged with a forest landscape, trees growing within her silhouette, ethereal blend of human and nature, artistic photography technique, dreamlike overlay, poetic visual metaphor' }
        ]
    },

    'pixel-art': {
        title: '픽셀 아트(Pixel Art)',
        koreanTitle: '픽셀 아트',
        prompt: 'pixel art, 16-bit style, retro game aesthetic, limited color palette',
        features: '정사각형 픽셀 단위 구성, 제한된 색상, 레트로 게임 감성',
        mood: '레트로, 게임적, 노스탤직',
        description: '픽셀 단위로 그리는 디지털 아트 스타일입니다. 8비트/16비트 시대의 게임 그래픽에서 영감받은 레트로 감성이 특징이며, 인디 게임과 NFT에서 인기입니다.',
        usage: [
            '인디 게임 아트',
            'NFT 아트',
            'SNS 프로필',
            '레트로 콘텐츠'
        ],
        examplePrompts: [
            { title: '캐릭터', prompt: 'pixel art character, 16-bit RPG hero, sword and shield, limited palette, retro game sprite, detailed' },
            { title: '풍경', prompt: 'pixel art sunset landscape, 16-bit style, palm trees, ocean, warm colors, retro game background' },
            { title: '도시', prompt: 'pixel art cyberpunk city, neon signs, rainy night, 16-bit aesthetic, detailed pixel work, animated feel' },
        ],
        images: [
            { src: '/images/guide/style/pixel-art-1.jpg', caption: 'pixel art example 1', prompt: 'pixel art scene of a hero character standing at castle entrance, 16-bit retro game aesthetic, limited color palette, nostalgic SNES era quality, detailed sprite work, fantasy RPG scene, torchlit stone walls, adventure game atmosphere' }
        ]
    },

    'papercraft': {
        title: '페이퍼크래프트(Papercraft)',
        koreanTitle: '페이퍼크래프트',
        prompt: 'papercraft style, cut paper layers, paper texture, depth layers, handmade',
        features: '종이 레이어로 구성된 깊이감, 종이 질감과 그림자, 수공예 느낌',
        mood: '수공예적, 따뜻한, 입체적',
        description: '종이를 오려 겹겹이 쌓아 만든 듯한 아트 스타일입니다. 종이의 질감과 레이어 사이의 그림자가 만들어내는 입체감이 특징입니다.',
        usage: [
            '어린이 콘텐츠',
            '광고 비주얼',
            '인테리어 아트',
            '패키지 디자인'
        ],
        examplePrompts: [
            { title: '풍경', prompt: 'papercraft style landscape, layered cut paper mountains, paper texture visible, depth shadows, handmade craft' },
            { title: '도시', prompt: 'papercraft cityscape, buildings made of colored paper layers, pop-up book style, detailed cutting, shadows' },
            { title: '바다', prompt: 'papercraft underwater scene, layered paper waves, cut-out fish and coral, blue gradient layers, handmade feel' },
        ],
        images: [
            { src: '/images/guide/style/papercraft-1.jpg', caption: 'papercraft example 1', prompt: 'papercraft layered paper cut art of a underwater ocean scene, multiple depth layers, intricate cut paper fish and coral, shadow box effect, handmade craft aesthetic, colorful construction paper, dimensional paper sculpture, detailed edges' }
        ]
    },

    'stained-glass': {
        title: '스테인드 글라스(Stained Glass)',
        koreanTitle: '스테인드 글라스',
        prompt: 'stained glass window style, leaded glass, translucent colors, light shining through',
        features: '납 테두리로 구획된 색유리, 빛이 투과되는 반투명 색상, 성당 창문 느낌',
        mood: '신성한, 화려한, 고전적',
        description: '성당이나 교회의 스테인드 글라스 창문 스타일입니다. 납(lead)으로 구획된 색유리 패널과 빛이 통과하면서 만들어내는 화려한 색채가 특징입니다.',
        usage: [
            '종교 예술',
            '장식 디자인',
            '인테리어 아트',
            '포스터/아트 프린트'
        ],
        examplePrompts: [
            { title: '장미', prompt: 'stained glass window style, rose bloom, leaded glass segments, translucent red and green, light shining through' },
            { title: '풍경', prompt: 'stained glass style sunset landscape, colorful glass segments, black lead lines, cathedral window, luminous' },
            { title: '공작새', prompt: 'stained glass peacock, intricate feather details in colored glass, gothic arch frame, backlit, vibrant colors' },
        ],
        images: [
            { src: '/images/guide/style/stained-glass-1.jpg', caption: 'stained glass example 1', prompt: 'stained glass window depicting a majestic peacock with spread tail feathers, vibrant jewel-toned glass pieces, lead came outlines, cathedral light streaming through, Gothic arch frame, rich blues greens and golds, radiant backlighting' }
        ]
    },

    'watercolor': {
        title: '수채화(Watercolor)',
        koreanTitle: '수채화',
        prompt: 'watercolor painting, wet-on-wet technique, soft edges, transparent layers',
        features: '물의 번짐 효과, 투명한 색상 레이어, 부드러운 경계, 유동적 표현',
        mood: '감성적, 부드러운, 자연스러운',
        description: '물감의 번짐과 투명한 레이어가 특징인 부드럽고 유동적인 회화 스타일입니다. 물의 양에 따라 다양한 효과를 만들어내며, 감성적이고 서정적인 분위기를 연출합니다.',
        usage: [
            '감성적인 일러스트',
            '풍경화',
            '동화책 삽화',
            '패션 일러스트'
        ],
        examplePrompts: [
            { title: '풍경', prompt: 'watercolor painting, misty mountain landscape, wet-on-wet technique, soft bleeding edges, atmospheric, serene' },
            { title: '꽃', prompt: 'watercolor painting of wildflowers, loose brushstrokes, transparent pigments, white paper showing through, delicate' },
            { title: '인물', prompt: 'watercolor portrait, soft flowing colors, wet-on-wet blending, minimal lines, artistic paint drips, elegant' },
        ],
        images: [
            { src: '/images/guide/style/watercolor-1.jpg', caption: 'Watercolor style 1', prompt: 'watercolor painting of a misty mountain landscape, wet-on-wet technique creating soft bleeding edges, transparent pigment layers, atmospheric depth, delicate tonal gradations, serene' }
        ]
    },

    // ============= MEDIUM =============
    // Traditional Media
    'oil-painting': {
        title: '유화(Oil Painting)',
        koreanTitle: '유화',
        prompt: 'oil painting',
        description: '유성 물감을 사용한 전통적인 회화 기법으로, 깊이 있는 색감과 질감이 특징입니다.',
        usage: [
            '클래식 초상화',
            '풍경화',
            '정물화',
            '고전 미술'
        ],
        images: [
            { src: '/images/guide/medium/oil-painting-1.jpg', caption: 'Oil painting style 1', prompt: 'oil painting portrait of a young woman in a pearl earring, Vermeer inspired, visible impasto brushstrokes, rich warm glazing layers, canvas texture, classical chiaroscuro lighting, museum masterpiece quality, 8K' }
        ]
    },

    'acrylic-painting': {
        title: '아크릴화(Acrylic Painting)',
        koreanTitle: '아크릴화',
        prompt: 'acrylic painting',
        description: '빠르게 건조되고 다양한 기법이 가능한 현대적인 회화 매체입니다.',
        usage: [
            '현대 미술',
            '추상화',
            '벽화',
            '일러스트레이션'
        ],
        images: [
            { src: '/images/guide/medium/acrylic-painting-1.jpg', caption: 'Acrylic painting style 1', prompt: 'acrylic painting of a street musician playing saxophone under city lights, bold vivid brushstrokes, thick textured layers, contemporary urban scene, energetic composition, saturated neon reflections on wet pavement' }
        ]
    },

    'pencil-drawing': {
        title: '연필화(Pencil Drawing)',
        koreanTitle: '연필 드로잉',
        prompt: 'pencil drawing',
        description: '흑연 연필로 그리는 가장 기본적인 드로잉 기법으로, 섬세한 명암 표현이 가능합니다.',
        usage: [
            '스케치',
            '초상화',
            '학술 일러스트',
            '콘셉트 스케치'
        ],
        images: [
            { src: '/images/guide/medium/pencil-drawing-1.jpg', caption: 'Pencil drawing style 1', prompt: 'detailed pencil drawing of an old man’s hands holding a pocket watch, precise graphite shading, hyperrealistic wrinkles and veins, fine crosshatching technique, emotional still life, classical drawing skill, 8K' }
        ]
    },

    'charcoal': {
        title: '목탄화(Charcoal)',
        koreanTitle: '차콜 드로잉',
        prompt: 'charcoal drawing',
        description: '목탄을 사용한 드로잉으로, 깊은 검정색과 부드러운 그라데이션이 특징입니다.',
        usage: [
            '인물 드로잉',
            '표현주의 작품',
            '라이프 드로잉',
            '드라마틱한 명암'
        ],
        images: [
            { src: '/images/guide/medium/charcoal-1.jpg', caption: 'Charcoal portrait', prompt: 'charcoal drawing of a flamenco dancer mid-spin, dramatic flowing dress movement, expressive smudged strokes, raw emotional energy, deep blacks and bold highlights, figure drawing mastery, passionate performance captured' }
        ]
    },

    // Photography Media
    'digital-photography': {
        title: '디지털 사진(Digital Photography)',
        koreanTitle: '디지털 포토그래피',
        prompt: 'digital photography',
        description: '디지털 센서를 사용하여 촬영하고 편집하는 현대적인 사진 매체입니다.',
        usage: [
            '상업 사진',
            '포토저널리즘',
            '예술 사진',
            '일상 기록'
        ],
        images: [
            { src: '/images/guide/medium/digital-photography-1.jpg', caption: 'Digital capture', prompt: 'high-end digital photography of a model in haute couture fashion, crisp 8K resolution, studio ring light, commercial beauty shot, flawless skin detail, modern mirrorless camera quality, magazine cover grade' }
        ]
    },

    'film-photography': {
        title: '필름 사진(Film Photography)',
        koreanTitle: '필름 포토그래피',
        prompt: 'film photography',
        description: '아날로그 필름을 사용한 전통적인 사진 매체로, 특유의 질감과 색감이 특징입니다.',
        usage: [
            '예술 사진',
            '웨딩 포토',
            '빈티지 스타일',
            '다큐멘터리'
        ],
        images: [
            { src: '/images/guide/medium/film-photography-1.jpg', caption: 'Film grain', prompt: '35mm film photography of a couple walking through autumn park, natural Kodak Portra 400 warm tones, gentle film grain, slightly soft focus, nostalgic romantic atmosphere, analog color rendition, genuine vintage feel' }
        ]
    },

    'polaroid': {
        title: '폴라로이드(Polaroid)',
        koreanTitle: '폴라로이드',
        prompt: 'polaroid',
        description: '즉석 사진의 대명사로, 특유의 프레임과 색감이 특징적인 사진 매체입니다.',
        usage: [
            '스냅샷',
            '레트로 스타일',
            '이벤트 사진',
            '감성 포토'
        ],
        images: [
            { src: '/images/guide/medium/polaroid-1.jpg', caption: 'Instant photo', prompt: 'Polaroid instant photo of friends laughing at a summer beach party, white border frame, slightly sun-bleached vintage colors, casual snapshot aesthetic, square format, carefree retro nostalgia, spontaneous joy captured' }
        ]
    },

    'long-exposure': {
        title: '장노출(Long Exposure)',
        koreanTitle: '장노출 사진',
        prompt: 'long exposure',
        description: '셔터를 오래 열어 시간의 흐름을 한 장의 이미지에 담는 사진 기법입니다.',
        usage: [
            '빛의 궤적',
            '별 궤적',
            '물의 흐름',
            '도시 야경'
        ],
        images: [
            { src: '/images/guide/medium/long-exposure-1.jpg', caption: 'Light trails', prompt: 'long exposure photograph of a waterfall cascading over mossy rocks, silky smooth water flow, tripod-sharp surrounding stones, misty ethereal atmosphere, nature photography, 30 second exposure, dreamy motion effect' }
        ]
    },

    // Mixed Media
    'collage': {
        title: '콜라주(Collage)',
        koreanTitle: '콜라주',
        prompt: 'collage',
        description: '다양한 재료와 이미지를 조합하여 하나의 작품을 만드는 혼합 매체 기법입니다.',
        usage: [
            '실험적 예술',
            '스크랩북',
            '광고 디자인',
            '콘셉추얼 아트'
        ],
        images: [
            { src: '/images/guide/medium/collage-1.jpg', caption: 'Mixed elements', prompt: 'mixed media paper collage portrait of a woman, torn vintage magazine clippings layered with hand-painted watercolor elements, textured composition, retro ephemera, artistic assemblage, creative visual storytelling' }
        ]
    },

    'digital-collage': {
        title: '디지털 콜라주(Digital Collage)',
        koreanTitle: '디지털 콜라주',
        prompt: 'digital collage',
        description: '디지털 도구를 사용하여 다양한 이미지와 요소를 합성하는 현대적 콜라주 기법입니다.',
        usage: [
            '포스터 디자인',
            '앨범 커버',
            '소셜 미디어 아트',
            '디지털 아트'
        ],
        images: [
            { src: '/images/guide/medium/digital-collage-1.jpg', caption: 'Digital composite', prompt: 'digital collage surreal artwork of a woman’s portrait merged with tropical flowers and butterflies, seamlessly blended photographic elements, dreamlike digital manipulation, vibrant contemporary art, striking composition' }
        ]
    },

    'mixed-technique': {
        title: '혼합 기법(Mixed Technique)',
        koreanTitle: '믹스드 테크닉',
        prompt: 'mixed media',
        description: '여러 매체와 기법을 자유롭게 조합하여 새로운 표현을 만드는 실험적 접근입니다.',
        usage: [
            '실험적 예술',
            '현대 미술',
            '텍스처 아트',
            '멀티미디어 작품'
        ],
        images: [
            { src: '/images/guide/medium/mixed-technique-1.jpg', caption: 'Combined media', prompt: 'mixed media artwork combining ink drawing of a city skyline with watercolor washes and gold leaf accents, layered textures, experimental fusion technique, contemporary art expression, innovative material combination' }
        ]
    },

    // ============= VIDEO CAMERA EFFECTS =============
    // Camera Movement
    'pan': {
        title: '팬(Pan)',
        koreanTitle: '패닝',
        prompt: 'camera pan',
        description: '카메라를 수평으로 회전시켜 좌우로 이동하는 촬영 기법입니다.',
        usage: [
            '넓은 풍경을 보여줄 때',
            '인물의 시선을 따라갈 때',
            '공간의 연결성을 보여줄 때',
            '대화하는 두 인물 사이를 이동'
        ],
        images: [
            { src: '/images/guide/video/pan-1.jpg', caption: 'Horizontal movement', prompt: 'cinematic horizontal camera pan revealing vast desert landscape, smooth lateral movement from left to right, panoramic vista unfolding, professional cinematography, film still quality, 8K' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/4bbde702-836e-4fc5-b8ee-da134738be50/0.mp4', caption: 'Camera pan example 1' },
            { src: 'https://cdn.midjourney.com/video/02398193-3843-4f96-ab81-3cb2cad3ce69/0.mp4', caption: 'Camera pan example 2' }
        ]
    },

    'tilt': {
        title: '틸트(Tilt)',
        koreanTitle: '틸팅',
        prompt: 'camera tilt',
        description: '카메라를 수직으로 회전시켜 위아래로 이동하는 촬영 기법입니다.',
        usage: [
            '높은 건물을 보여줄 때',
            '인물의 전신을 스캔할 때',
            '위압감이나 규모를 강조할 때',
            '시선의 이동을 유도'
        ],
        images: [
            { src: '/images/guide/video/tilt-1.jpg', caption: 'Vertical movement', prompt: 'camera tilt up shot revealing towering skyscraper from base to top, slow vertical movement, architectural grandeur, urban cinematography, dramatic upward reveal, professional' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/8cd7fc99-d201-4091-9768-11b7155615f3/0.mp4', caption: 'Camera tilt example 1' },
            { src: 'https://cdn.midjourney.com/video/c4fb2244-3298-4e02-96b5-b82a895a5897/0.mp4', caption: 'Camera tilt example 2' }
        ]
    },

    'dolly': {
        title: '달리(Dolly)',
        koreanTitle: '달리 샷',
        prompt: 'dolly shot',
        description: '카메라 전체를 앞뒤로 이동시키는 촬영 기법입니다.',
        usage: [
            '피사체에 접근하거나 멀어질 때',
            '감정적 거리감을 조절할 때',
            '긴장감을 고조시킬 때',
            '공간감을 표현할 때'
        ],
        images: [
            { src: '/images/guide/video/dolly-1.jpg', caption: 'Forward dolly', prompt: 'dolly shot moving forward through dimly lit corridor toward bright doorway, smooth forward camera movement, building tension, cinematic approach, dramatic reveal, atmospheric, suspenseful' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/32f518ca-b8d7-43bf-9bad-affa753b4eff/0.mp4', caption: 'Dolly shot example 1' },
            { src: 'https://cdn.midjourney.com/video/10f6b313-e47b-4335-a36d-6200229ea8d8/0.mp4', caption: 'Dolly shot example 2' }
        ]
    },

    'tracking': {
        title: '트래킹(Tracking)',
        koreanTitle: '트래킹 샷',
        prompt: 'tracking shot',
        description: '움직이는 피사체를 따라가며 촬영하는 기법입니다.',
        usage: [
            '달리는 인물을 따라갈 때',
            '차량 추격 장면',
            '긴 복도를 이동할 때',
            '역동적인 액션 씬'
        ],
        images: [
            { src: '/images/guide/video/tracking-1.jpg', caption: 'Following subject', prompt: 'tracking shot following athlete running through city streets, lateral camera movement keeping pace, dynamic action, urban backdrop, sports cinematography, energetic, professional, kinetic' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/f32eaa9d-664e-41ad-9efb-b79f42e1b6b4/0.mp4', caption: 'Tracking shot example 1' },
            { src: 'https://cdn.midjourney.com/video/c4546ac9-cad6-481b-988b-5430e101053e/0.mp4', caption: 'Tracking shot example 2' }
        ]
    },

    'crane': {
        title: '크레인(Crane)',
        koreanTitle: '크레인 샷',
        prompt: 'crane shot',
        description: '크레인을 사용하여 카메라를 높이 올리거나 내리는 대규모 움직임입니다.',
        usage: [
            '웅장한 전경을 보여줄 때',
            '전투 씬의 규모를 표현',
            '영화의 오프닝이나 엔딩',
            '극적인 reveal 장면'
        ],
        images: [
            { src: '/images/guide/video/crane-1.jpg', caption: 'Aerial movement', prompt: 'crane shot ascending from street level to reveal sprawling cityscape, dramatic upward camera movement, expanding vista, aerial perspective reveal, cinematic grandeur, 8K' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/a31ce983-b68f-4d08-86b4-612adab33ec4/0.mp4', caption: 'Crane shot example 1' },
            { src: 'https://cdn.midjourney.com/video/c99c1d2d-657c-4dde-bd41-52d075b8ed30/0.mp4', caption: 'Crane shot example 2' }
        ]
    },

    'handheld': {
        title: '핸드헬드(Handheld)',
        koreanTitle: '핸드헬드',
        prompt: 'handheld camera',
        description: '카메라를 손으로 들고 촬영하여 자연스러운 흔들림이 있는 기법입니다.',
        usage: [
            '다큐멘터리적 리얼리즘',
            '긴박한 액션 씬',
            '주인공의 시점 표현',
            '불안정한 감정 상태'
        ],
        images: [
            { src: '/images/guide/video/handheld-1.jpg', caption: 'Documentary style', prompt: 'handheld camera documentary style shot of protest march, natural camera shake, immersive raw footage, authentic movement, photojournalism cinematography, immediate and visceral, real' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/06c262d7-2224-434d-ae1e-ca0f8c65eba6/0.mp4', caption: 'Handheld camera example 1' },
            { src: 'https://cdn.midjourney.com/video/62dbb6e7-f3f5-4e12-bccf-4f6f93c3c49e/0.mp4', caption: 'Handheld camera example 2' }
        ]
    },

    // Transitions
    'cut': {
        title: '컷(Cut)',
        koreanTitle: '컷',
        prompt: 'hard cut',
        description: '한 장면에서 다른 장면으로 즉시 전환하는 가장 기본적인 편집 기법입니다.',
        usage: [
            '시간과 공간의 즉각적 전환',
            '빠른 리듬감 조성',
            '대화 장면 편집',
            '액션의 연속성'
        ],
        images: [
            { src: '/images/guide/video/cut-1.jpg', caption: 'Instant transition', prompt: 'film still before hard cut transition, scene A of character in bright sunlit room, instant scene change upcoming, sharp edit point, cinematic pacing, dramatic contrast, crisp' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/83fc363e-51dc-41ff-b026-8c6e7da0275b/0.mp4', caption: 'Hard cut example 1' },
            { src: 'https://cdn.midjourney.com/video/36aa24ba-9579-4b2c-8c46-41d802ad8c56/0.mp4', caption: 'Hard cut example 2' }
        ]
    },

    'fade': {
        title: '페이드(Fade)',
        koreanTitle: '페이드',
        prompt: 'fade in,out',
        description: '화면이 점점 어두워지거나(Fade Out) 밝아지는(Fade In) 전환 효과입니다.',
        usage: [
            '시간의 경과 표현',
            '장면의 시작과 끝',
            '꿈이나 회상 장면',
            '감정적 여운'
        ],
        images: [
            { src: '/images/guide/video/fade-1.jpg', caption: 'Fade to black', prompt: 'film still of scene fading to black, gradual darkness encroaching from edges, cinematic ending transition, emotional conclusion, soft visual dissolution, melancholic mood, atmospheric' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/c5b6d43e-513c-47b0-9b6f-695e2a5ebe41/0.mp4', caption: 'Fade in/out example 1' },
            { src: 'https://cdn.midjourney.com/video/b1eeef73-00cd-492c-b6b9-7e5c3a33e400/0.mp4', caption: 'Fade in/out example 2' }
        ]
    },

    'dissolve': {
        title: '디졸브(Dissolve)',
        koreanTitle: '디졸브',
        prompt: 'dissolve transition',
        description: '한 장면이 사라지면서 동시에 다음 장면이 나타나는 부드러운 전환입니다.',
        usage: [
            '시간의 부드러운 경과',
            '장소의 전환',
            '연관성 있는 장면 연결',
            '몽환적 분위기'
        ],
        images: [
            { src: '/images/guide/video/dissolve-1.jpg', caption: 'Cross dissolve', prompt: 'cross dissolve film still showing two scenes blended together, overlapping transitional moment, dreamlike quality, time passage visualization, poetic cinematography, ghostly double image' }
        ],
        videos: [
            { src: 'https://www.dropbox.com/scl/fi/g1rr6b4wmchcvype8uzqv/.mp4?rlkey=yyg9msfagzhqu0dk5rp6q3knr&st=2mrkv037&raw=1', caption: 'Dissolve transition effect' }
        ]
    },

    'wipe': {
        title: '와이프(Wipe)',
        koreanTitle: '와이프',
        prompt: 'wipe transition',
        description: '화면이 특정 방향으로 닦이듯이 다음 장면으로 전환되는 효과입니다.',
        usage: [
            '공간의 이동 표현',
            '코미디적 효과',
            '레트로 스타일',
            'Star Wars 스타일'
        ],
        images: [
            { src: '/images/guide/video/wipe-1.jpg', caption: 'Directional wipe', prompt: 'wipe transition film still showing directional reveal, one scene sliding away to reveal another, clean geometric edge, retro editing style, dynamic scene change, graphic, bold' }
        ],
        videos: [
            { src: 'https://www.dropbox.com/scl/fi/2pprt6g78qvmx74cdxwh6/.mp4?rlkey=kz9y0duem3yse1v7cki9vjj3q&st=bk9pfjjp&raw=1', caption: 'Wipe transition effect' }
        ]
    },

    'match-cut': {
        title: '매치 컷(Match Cut)',
        koreanTitle: '매치 컷',
        prompt: 'match cut',
        description: '시각적으로 유사한 요소를 이용해 서로 다른 장면을 연결하는 창의적 편집입니다.',
        usage: [
            '시공간의 도약',
            '주제적 연결',
            '시각적 연속성',
            '은유적 표현'
        ],
        images: [
            { src: '/images/guide/video/match-cut-1.jpg', caption: 'Visual match', prompt: 'match cut visual pairing of spinning basketball transitioning to spinning globe, shape and motion match, creative editing, visual storytelling, seamless conceptual transition, clever' }
        ]
    },

    // Special Effects
    'slow-motion': {
        title: '슬로우 모션(Slow Motion)',
        koreanTitle: '슬로모션',
        prompt: 'slow motion',
        description: '실제보다 느린 속도로 재생하여 동작을 강조하는 효과입니다.',
        usage: [
            '극적인 순간 강조',
            '액션 씬의 디테일',
            '감정적 임팩트',
            '스포츠 하이라이트'
        ],
        images: [
            { src: '/images/guide/video/slow-motion-1.jpg', caption: 'Dramatic effect', prompt: 'slow motion dramatic shot of water droplet impact creating perfect crown splash, time stretched to reveal invisible detail, high speed camera, stunning fluid dynamics, mesmerizing' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/1230e36a-fc0e-46f0-9f92-14d7cafb9767/0.mp4', caption: 'Slow motion example 1' },
            { src: 'https://cdn.midjourney.com/video/1fc09d91-03f1-4657-948b-20717809598a/0.mp4', caption: 'Slow motion example 2' }
        ]
    },

    'time-lapse': {
        title: '타임랩스(Time-lapse)',
        koreanTitle: '타임랩스',
        prompt: 'time-lapse',
        description: '긴 시간을 짧게 압축하여 빠르게 재생하는 기법입니다.',
        usage: [
            '시간의 흐름 표현',
            '도시의 변화',
            '자연 현상',
            '건설 과정'
        ],
        images: [
            { src: '/images/guide/video/time-lapse-1.jpg', caption: 'Time compression', prompt: 'time-lapse film still of day to night city transition, compressed hours showing changing light, urban transformation, accelerated time photography, city lights emerging, dynamic' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/83dd9038-03eb-4191-acc4-7e408af64086/0.mp4', caption: 'Time-lapse example 1' },
            { src: 'https://cdn.midjourney.com/video/0d1299d0-84d1-4c6c-b953-adf573e24d83/0.mp4', caption: 'Time-lapse example 2' }
        ]
    },

    'freeze-frame': {
        title: '프리즈 프레임(Freeze Frame)',
        koreanTitle: '정지 화면',
        prompt: 'freeze frame',
        description: '움직이는 영상을 특정 순간에 정지시키는 효과입니다.',
        usage: [
            '중요한 순간 강조',
            '내레이션 삽입',
            '극적인 엔딩',
            '캐릭터 소개'
        ],
        images: [
            { src: '/images/guide/video/freeze-frame-1.jpg', caption: 'Frozen moment', prompt: 'freeze frame frozen moment of athlete mid-air during high jump, peak action captured, time completely stopped, sports photography, dramatic suspension, athletic grace, powerful, 8K' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/ec06fa05-a333-4821-96a7-09fe3ff59666/0.mp4', caption: 'Freeze frame example 1' },
            { src: 'https://cdn.midjourney.com/video/53c3a3e7-25a2-4cbf-bde0-2aae52d1a542/0.mp4', caption: 'Freeze frame example 2' }
        ]
    },

    'motion-blur': {
        title: '모션 블러(Motion Blur)',
        koreanTitle: '모션 블러',
        prompt: 'motion blur',
        description: '빠른 움직임을 흐릿하게 표현하여 속도감을 나타내는 효과입니다.',
        usage: [
            '속도감 표현',
            '액션의 강조',
            '시간의 흐름',
            '역동적 에너지'
        ],
        images: [
            { src: '/images/guide/video/motion-blur-1.jpg', caption: 'Speed effect', prompt: 'motion blur speed effect of racing car on track, streaked background showing velocity, panning photography technique, automotive action, extreme speed visualization, dynamic energy, sharp car' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/d9a5afb5-a846-4a58-8fb7-e2e217f34063/0.mp4', caption: 'Motion blur example 1' },
            { src: 'https://cdn.midjourney.com/video/e1d217d4-bc4a-413f-8c24-3993c5002b8e/0.mp4', caption: 'Motion blur example 2' }
        ]
    },

    // ============= AIFI FRAMEWORK =============
    'instructor-profile': {
        title: '강사 소개',
        koreanTitle: '강사 소개',
        prompt: 'AI TOOLBEE 창시자',
        instructorInfo: {
            name: '김진욱 (하루오프)',
            nickname: '하루오프',
            positions: [
                'AI TOOLBEE 개발 이사',
                '(주)알앤픽 대표이사',
                '(주)제이콥소프트 전략영업대표'
            ]
        },
        description: 'AI TOOLBEE의 전체적인 시스템 개발자로서 AIFI님과 함께 영상프레임워크의 새로움 패러다임을 도입하여 체계적인 프롬프트 엔지니어링과 창작 프로세스를 통해 누구나 고품질 콘텐츠를 제작할 수 있도록 하였습니다.',
        usage: [
            'AI TOOLBEE 개발 및 교육',
            'AI 기반 콘텐츠 제작 솔루션',
            '체계적인 프롬프트 엔지니어링 방법론',
            '창작자를 위한 실무 교육 프로그램'
        ],
        images: [
            { src: '/images/guide/toolb/instructor-profile-1.jpg', caption: '강사 프로필', prompt: 'AI 교육 전문가 프로필 사진, 전문적인 포트레이트, professional instructor portrait, clean studio background, confident expression' }
        ]
    },

    'intro-videos': {
        title: '인트로 영상 갤러리',
        koreanTitle: '인트로 영상 갤러리',
        prompt: '영상 소개',
        description: 'AI TOOLBEE와 관련된 다양한 인트로 영상을 감상하실 수 있습니다. 각 영상을 클릭하면 전체화면으로 재생됩니다.',
        usage: [
            'AIFI JU0님의 영상',
            '기술 데모 영상',
            '튜토리얼 인트로 영상',
            'VEO3로 영상개발'
        ],
        videos: [
            {
                url: '/images/guide/video/fade-v1.mp4',
                thumbnail: '/images/guide/video/fade-1.jpg',
                title: 'AIFI JU0 님의 영상',
                description: '중세시대 혼돈의 시기를 이겨내는 전쟁신 인트로 영상'
            },
            {
                url: '/images/guide/video/fade-v2.mp4',
                thumbnail: '/images/guide/video/fade-2.jpg',
                title: '나 혼자만 레벨업 3D랜더링',
                description: '최강의 웹툰 "나 혼자만 레벨업"의 3D랜더링한 작품'
            },
            {
                url: '/images/guide/toolb/intro-videos-v3.mp4',
                thumbnail: '/images/guide/toolb/intro-videos-3.jpg',
                title: '튜토리얼 인트로',
                description: '초보자를 위한 AI TOOLBEE 튜토리얼 시작 영상입니다.'
            },
            {
                url: '/images/guide/video/dissolve-v4.mp4',
                thumbnail: '/images/guide/video/dissolve-4.jpg',
                title: '프로젝트 쇼케이스',
                description: 'AI TOOLBEE를 활용한 다양한 프로젝트 결과물을 소개하는 영상입니다.'
            }
        ],
        images: [
            { src: '/images/guide/toolb/intro-videos-1.jpg', caption: 'intro videos example 1', prompt: 'AI TOOLBEE feature demonstration 1, tool interface showcase, modern UI design, professional quality, informative visual' }
        ]
    },

    // ============= AIFI 툴 =============
    'aifi-image-generator': {
        title: '이미지 생성기',
        koreanTitle: 'AI 이미지 생성',
        prompt: 'AI 이미지 생성',
        description: '텍스트 프롬프트를 입력하여 고품질 이미지를 생성할 수 있는 도구입니다. Google Gemini API를 활용하여 전문 사진작가 수준의 이미지를 제작할 수 있습니다.',
        usage: [
            '텍스트 프롬프트로 이미지 생성',
            '창작 아이디어 시각화',
            '콘텐츠 제작용 이미지',
            '프로토타입 디자인'
        ],
        images: [
            { src: '/images/guide/toolb/aifi-image-generator-1.jpg', caption: 'AI 이미지 생성', prompt: 'AI 이미지 생성 도구 인터페이스, 텍스트 프롬프트를 이미지로 변환, AI technology interface, modern UI design, creative tool' }
        ]
    },

    'aifi-prompt-extractor': {
        title: '프롬프트 추출기',
        koreanTitle: '이미지 프롬프트 추출',
        prompt: '이미지 분석 및 프롬프트 추출',
        description: '업로드된 이미지를 분석하여 AI 이미지 생성에 사용할 수 있는 구조화된 프롬프트를 자동으로 추출합니다.',
        usage: [
            '이미지 역분석',
            '프롬프트 학습',
            '스타일 분석',
            '재현 가능한 프롬프트 생성'
        ],
        images: [
            { src: '/images/guide/toolb/aifi-prompt-extractor-1.jpg', caption: '이미지 분석', prompt: '이미지 분석 AI 도구, 업로드된 이미지에서 프롬프트 추출, reverse engineering interface, technology tool, analytical' }
        ]
    },

    'aifi-image-variator': {
        title: '이미지 변형기',
        koreanTitle: '이미지 변형 생성',
        prompt: '이미지 변형 및 편집',
        description: '기존 이미지를 업로드하고 변형 지시사항을 입력하여 새로운 버전의 이미지를 생성할 수 있습니다.',
        usage: [
            '이미지 스타일 변경',
            '창작적 변형',
            '버전 생성',
            '아이디어 발전'
        ],
        images: [
            { src: '/images/guide/toolb/aifi-image-variator-1.jpg', caption: '이미지 변형', prompt: '이미지 변형 AI 도구, 원본 이미지 기반 다양한 변형 생성, creative variation interface, artistic tool, innovative' }
        ]
    },

    'aifi-video-prompt': {
        title: '영상 프롬프트 생성기',
        koreanTitle: '영상 프롬프트 생성',
        prompt: 'AI 영상 프롬프트 생성',
        description: '텍스트 아이디어를 입력하면 Veo 3와 같은 텍스트-투-비디오 AI 모델에서 사용할 수 있는 상세한 JSON 프롬프트를 생성합니다.',
        usage: [
            '영상 제작 계획',
            'AI 영상 생성 프롬프트',
            '시나리오 구조화',
            '영상 스타일 정의'
        ],
        images: [
            { src: '/images/guide/toolb/aifi-video-prompt-1.jpg', caption: '영상 제작', prompt: '영상 프롬프트 생성 AI 도구, 텍스트 기반 영상 제작 인터페이스, video creation tool, modern technology UI, cinematic' }
        ]
    },

    // ============= HAIRSTYLES =============
    'hairstyles': {
        title: '헤어스타일(Hairstyles)',
        koreanTitle: '헤어스타일 키워드',
        prompt: 'hairstyle keywords',
        description: 'AI 이미지 생성을 위한 다양한 헤어스타일 키워드를 제공합니다. 각 스타일을 클릭하면 프롬프트가 생성됩니다.',
        usage: [
            '포트레이트 이미지 생성',
            '캐릭터 디자인',
            '패션 일러스트레이션',
            '뷰티 콘텐츠 제작'
        ],
        currentTab: 'woman',
        womanHairstyles: [
            {
                name: 'bun',
                koreanName: '번 헤어',
                description: 'messy bun hairstyle',
                image: '/images/guide/video/slow-motion-1.jpg'
            },
            {
                name: 'double bun',
                koreanName: '더블 번',
                description: 'space buns hairstyle',
                image: '/images/guide/video/slow-motion-2.jpg'
            },
            {
                name: 'wavy',
                koreanName: '웨이브',
                description: 'wavy hair',
                image: '/images/guide/video/slow-motion-3.jpg'
            },
            {
                name: 'crown braid',
                koreanName: '크라운 브레이드',
                description: 'crown braid hairstyle',
                image: '/images/guide/video/slow-motion-4.jpg'
            },
            {
                name: 'double braid',
                koreanName: '더블 브레이드',
                description: 'twin braids hairstyle',
                image: '/images/guide/practice/hairstyles-5.jpg'
            },
            {
                name: 'short bob',
                koreanName: '숏 보브',
                description: 'short bob haircut',
                image: '/images/guide/video/time-lapse-6.jpg'
            },
            {
                name: 'short with bangs',
                koreanName: '숏 뱅 헤어',
                description: 'short hair with bangs',
                image: '/images/guide/video/time-lapse-7.jpg'
            },
            {
                name: 'ponytail',
                koreanName: '포니테일',
                description: 'sleek ponytail hairstyle',
                image: '/images/guide/video/time-lapse-8.jpg'
            },
            {
                name: 'straight',
                koreanName: '스트레이트',
                description: 'straight shoulder-length hair',
                image: '/images/guide/video/time-lapse-9.jpg'
            },
            {
                name: 'finger curls',
                koreanName: '핑거 컬',
                description: 'tight finger curls hairstyle',
                image: '/images/guide/practice/hairstyles-10.jpg'
            }
        ],
        manHairstyles: [
            {
                name: 'undercut',
                koreanName: '언더컷',
                description: 'undercut haircut',
                image: '/images/guide/video/freeze-frame-11.jpg'
            },
            {
                name: 'fade haircut',
                koreanName: '페이드 컷',
                description: 'fade haircut',
                image: '/images/guide/video/freeze-frame-12.jpg'
            },
            {
                name: 'buzz cut',
                koreanName: '버즈컷',
                description: 'buzz cut',
                image: '/images/guide/video/freeze-frame-13.jpg'
            },
            {
                name: 'pompadour',
                koreanName: '포마드',
                description: 'pompadour hairstyle',
                image: '/images/guide/video/freeze-frame-14.jpg'
            },
            {
                name: 'quiff',
                koreanName: '퀴프',
                description: 'quiff hairstyle',
                image: '/images/guide/practice/hairstyles-15.jpg'
            },
            {
                name: 'side part',
                koreanName: '사이드 파트',
                description: 'side part hairstyle',
                image: '/images/guide/video/motion-blur-16.jpg'
            },
            {
                name: 'man bun',
                koreanName: '맨번',
                description: 'man bun hairstyle',
                image: '/images/guide/video/motion-blur-17.jpg'
            },
            {
                name: 'crew cut',
                koreanName: '크루컷',
                description: 'crew cut',
                image: '/images/guide/video/motion-blur-18.jpg'
            },
            {
                name: 'slicked back',
                koreanName: '슬릭백',
                description: 'slicked back hairstyle',
                image: '/images/guide/video/motion-blur-19.jpg'
            },
            {
                name: 'textured crop',
                koreanName: '텍스처드 크롭',
                description: 'textured crop hairstyle',
                image: '/images/guide/video/motion-blur-20.jpg'
            }
        ],
        images: [
            { src: '/images/guide/practice/hairstyles-1.jpg', caption: 'hairstyles example 1', prompt: 'hairstyles practice exercise example 1, creative project demonstration, step-by-step visual guide, educational content, clear composition' }
        ]
    },

    // ============= FRAMEWORK STAGES =============
    'framework-stages': {
        title: '프레임워크 스테이지',
        koreanTitle: 'AIFI Framework Stages',
        prompt: '',
        description: 'AI TOOLBEE의 8단계 스테이지를 통해 체계적으로 학습하고 실습할 수 있습니다. 각 스테이지는 Google Gemini를 활용한 실전 프로젝트입니다.',
        usage: [],
        stages: [
            {
                id: 1,
                title: '스테이지 1',
                subtitle: '시놉시스 아이디어 창출 단계',
                description: '창의적인 스토리 아이디어를 구상하고 시놉시스를 작성하는 방법을 학습합니다.',
                url: 'https://gemini.google.com/gem/1tWO58mOJuoVdeKxEOCNYWHHUvUeAEXla?usp=sharing'
            },
            {
                id: 2,
                title: '스테이지 2',
                subtitle: '시나리오 작성단계',
                description: '구체적인 시나리오와 스크립트를 작성하여 스토리를 완성합니다.',
                url: 'https://gemini.google.com/gem/1jjSS7hLmZi3E0O0Tuaq0gQtYBSEfx6dw?usp=sharing'
            },
            {
                id: 3,
                title: '스테이지 3',
                subtitle: '컨셉아트 단계',
                description: '스토리에 맞는 비주얼 컨셉과 아트워크를 기획하고 설계합니다.',
                url: 'https://gemini.google.com/gem/1w6gliyVgUX9_JHm89-VNDsfpinsWEO4R?usp=sharing'
            },
            {
                id: 4,
                title: '스테이지 4',
                subtitle: '컨셉아트 프롬프트 생성단계',
                description: '컨셉아트를 AI로 생성하기 위한 정확하고 효과적인 프롬프트를 작성합니다.',
                url: 'https://gemini.google.com/gem/1kDHXJePLBkyRK07OSkGioVNCxn9XP4TZ?usp=sharing'
            },
            {
                id: 5,
                title: '스테이지 5',
                subtitle: '장면분할 단계',
                description: '스토리를 구체적인 장면과 시퀀스로 분할하고 구성합니다.',
                url: 'https://gemini.google.com/gem/1bRtrcTpDrX23xM_dflC5S5Qek-wdvrul?usp=sharing'
            },
            {
                id: 6,
                title: '스테이지 6',
                subtitle: '샷 이미지 프롬프트 생성단계',
                description: '각 샷에 필요한 상세한 이미지 프롬프트를 생성하고 최적화합니다.',
                url: 'https://gemini.google.com/gem/1TvK1sSlig1Nboted16aPAZqeHJTViEA4?usp=sharing'
            },
            {
                id: 7,
                title: '스테이지 7',
                subtitle: '영상프롬프트 생성단계',
                description: '동영상 생성을 위한 고급 프롬프트와 시네마틱 요소를 구성합니다.',
                url: 'https://gemini.google.com/gem/1OKB-2BgKza-Sv7cVVpJcGTdf1Mkx55PX?usp=sharing'
            },
            {
                id: 8,
                title: '스테이지 8',
                subtitle: '오디오 프롬프트 생성단계',
                description: '음향, 음악, 내레이션 등 오디오 요소를 위한 프롬프트를 완성합니다.',
                url: 'https://gemini.google.com/gem/1qq6JWNfWdzAfwFsdKjyZOTnn7MgXONzc?usp=sharing'
            }
        ],
        images: []
    },

    // ============= 실습과제 =============
    'chimpanzee-video': {
        title: '침팬지 영상만들기',
        koreanTitle: 'Chimpanzee Video Creation',
        description: 'ASMR 스타일의 침팬지 짜장면 먹방 영상을 만드는 실습과제입니다. 왼쪽 동영상을 참고하여 오른쪽 프롬프트를 활용해 영상을 생성해보세요.',
        videoUrl: '/images/guide/practice/chimpanzee-video-v1.mp4',
        prompt: `{
  "core_module": {
    "character": {
      "char_01": {
        "id": "Chimpanzee_ASMR_BJ",
        "signature_details": "An adult chimpanzee with expressive, thoughtful eyes. He has the calm and serious persona of a professional ASMRtist.",
        "voice_consistency": "An extremely close, breathy ASMR whisper, as if his lips are almost touching the microphone."
      },
        images: [
            { src: '/images/guide/practice/chimpanzee-video-1.jpg', caption: 'chimpanzee video example 1', prompt: 'chimpanzee video practice exercise example 1, creative project demonstration, step-by-step visual guide, educational content, clear composition' }
        ],
    },
    "location_baseline": {
      "setting": "A cozy, dimly lit room set up like a personal recording studio for ASMR.",
      "architecture": "A simple wooden table with a professional condenser microphone placed prominently.",
      "color_palette": "Warm tones, deep browns, soft oranges, and dark shadows."
    },
    "project_style": "ASMR, Mukbang (eating show), cinematic close-up, serious gourmet, photorealistic, high-detail"
  },
  "video_module": {
    "metadata": {
      "prompt_name": "chimpanzee_jjajangmyeon_asmr_whisper",
      "duration_seconds": 8
    },
    "global": {
      "description": "In a cozy ASMR studio, a thoughtful chimpanzee whispers an introduction to a bowl of Jajangmyeon (black bean noodles) before performing an intense, satisfying noodle slurp.",
      "style": "photorealistic, hyper-realistic, shallow depth of field, cinematic"
    },
    "dialogue_block": {
      "dialogue": "'자... 오늘의 메뉴는 짜장면입니다... 소리 한번 들어보시죠. (Ja... oneurui menyuneun jjajangmyeon-imnida... Sori hanbeon deureobosijyo.)'"
    },
    "sequence": [
      {
        "timestamp": "00:00-00:08",
        "camera": "Static medium close-up, slowly pushing in to an extreme close-up on the mouth and noodles for the final slurp.",
        "motion": "The chimpanzee whispers his introduction (dialogue) while gently stirring the glossy black noodles with chopsticks. He then lifts a large bundle of noodles right up to the microphone and slurps them into his mouth with intense satisfaction.",
        "audio": "Starts with an extremely soft, breathy whispered dialogue. This is followed by the wet, sticky sound of noodles being mixed, and culminates in a loud, deeply satisfying, and wet ASMR SLURP sound that dominates the final seconds.",
        "elements": [
          "chimpanzee's face",
          "condenser microphone",
          "a bowl of glossy Jajangmyeon",
          "slurping noodles"
        ],
        "ending": "The sequence ends mid-slurp, with noodles still hanging from his mouth."
      }
    ],
    "negative_prompts": [
      "cartoon",
      "unrealistic CGI",
      "clean, quiet eating",
      "no microphone",
      "bright lighting",
      "shouting or talking loudly"
    ]
  }
}`,
        type: 'practice'
    },

    'hamster-video': {
        title: '햄스터 돈가스먹방',
        koreanTitle: 'Hamster Pork Cutlet Mukbang',
        description: '귀여운 햄스터가 돈가스를 먹는 먹방 영상을 만드는 실습과제입니다.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        prompt: `{
  "core_module": {
    "character": {
      "char_01": {
        "id": "Hamster_Mukbang_Star",
        "signature_details": "A fluffy golden hamster with bright, curious eyes and chubby cheeks. Has an enthusiastic and cheerful personality.",
        "voice_consistency": "High-pitched, excited squeaking sounds with occasional satisfied 'nom nom' sounds."
      },
        images: [
            { src: '/images/guide/practice/hamster-video-1.jpg', caption: 'hamster video example 1', prompt: 'hamster video practice exercise example 1, creative project demonstration, step-by-step visual guide, educational content, clear composition' }
        ],
    },
    "location_baseline": {
      "setting": "A miniature dining setup with a tiny table and chair, perfectly sized for a hamster.",
      "architecture": "A cute wooden dining table with a small plate and miniature utensils.",
      "color_palette": "Bright, warm colors with pastel accents, well-lit and cheerful."
    },
    "project_style": "Cute mukbang, kawaii style, bright lighting, high-detail, adorable"
  },
  "video_module": {
    "metadata": {
      "prompt_name": "hamster_pork_cutlet_mukbang",
      "duration_seconds": 8
    },
    "global": {
      "description": "A cute hamster enthusiastically eating a miniature pork cutlet with tiny utensils, showing pure joy and satisfaction.",
      "style": "photorealistic, cute, bright lighting, shallow depth of field"
    },
    "sequence": [
      {
        "timestamp": "00:00-00:08",
        "camera": "Close-up shot focusing on the hamster's face and the tiny pork cutlet, slowly zooming in.",
        "motion": "The hamster picks up the miniature pork cutlet with its tiny paws, takes big enthusiastic bites, stuffing its cheeks full. Chews happily while making satisfied sounds.",
        "audio": "Cheerful squeaking, crunching sounds of the crispy cutlet, and satisfied 'nom nom' sounds.",
        "elements": [
          "fluffy golden hamster",
          "miniature pork cutlet",
          "tiny dining table",
          "small utensils",
          "stuffed cheeks"
        ],
        "ending": "The hamster pauses mid-chew with stuffed cheeks, looking directly at the camera with satisfied eyes."
      }
    ],
    "negative_prompts": [
      "realistic sized food",
      "dark lighting",
      "scared hamster",
      "messy eating",
      "cartoon style"
    ]
  }
}`,
        type: 'practice'
    },

    'crocodile-video': {
        title: '악어 국수먹방',
        koreanTitle: 'Crocodile Noodle Mukbang',
        description: '우아한 악어가 국수를 먹는 독특한 먹방 영상을 만드는 실습과제입니다.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        prompt: `{
  "core_module": {
    "character": {
      "char_01": {
        "id": "Elegant_Crocodile_Diner",
        "signature_details": "A large, sophisticated crocodile wearing a gentleman's bow tie. Has refined table manners despite being a predator.",
        "voice_consistency": "Deep, rumbling sounds with occasional satisfied grunts and slurping."
      },
        images: [
            { src: '/images/guide/practice/crocodile-video-1.jpg', caption: 'crocodile video example 1', prompt: 'crocodile video practice exercise example 1, creative project demonstration, step-by-step visual guide, educational content, clear composition' }
        ],
    },
    "location_baseline": {
      "setting": "An elegant dining room with fine dining atmosphere, white tablecloth and proper utensils.",
      "architecture": "A formal dining table with crystal glasses, silver cutlery, and fine china.",
      "color_palette": "Rich, elegant colors - deep greens, gold accents, warm lighting."
    },
    "project_style": "Sophisticated dining, elegant mukbang, formal atmosphere, high-class, photorealistic"
  },
  "video_module": {
    "metadata": {
      "prompt_name": "crocodile_noodle_elegant_dining",
      "duration_seconds": 8
    },
    "global": {
      "description": "An elegant crocodile in formal attire delicately eating noodles with surprising grace and sophistication.",
      "style": "photorealistic, cinematic lighting, elegant, sophisticated"
    },
    "sequence": [
      {
        "timestamp": "00:00-00:08",
        "camera": "Medium shot showing the crocodile at the dining table, slowly pushing in to focus on the noodle eating action.",
        "motion": "The crocodile carefully picks up noodles with a fork, twirling them elegantly before bringing them to its massive jaws. Eats with surprising delicacy and grace.",
        "audio": "Gentle classical background music, the sound of silverware, sophisticated slurping, and deep satisfied rumbles.",
        "elements": [
          "elegant crocodile with bow tie",
          "fine dining table setting",
          "bowl of noodles",
          "proper silverware",
          "crystal glasses"
        ],
        "ending": "The crocodile pauses, dabbing its mouth with a napkin in a very gentlemanly manner."
      }
    ],
    "negative_prompts": [
      "messy eating",
      "aggressive behavior",
      "cartoon style",
      "poor table manners",
      "dark, scary atmosphere"
    ]
  }
}`,
        type: 'practice'
    },

    // VEO 영상 프롬프트
    'veo-prompts': {
        title: 'VEO영상 만들기',
        koreanTitle: 'VEO Video Prompts',
        type: 'veo-prompts',
        description: 'Google VEO를 위한 다양한 영상 생성 프롬프트 모음입니다. 각 프롬프트를 클릭하여 복사할 수 있습니다.',
        prompts: [
            {
                title: '1. Nutella',
                content: `{
  "description": "Photorealistic cinematic shot of a sunlit kitchen nook. A sealed Nutella jar begins to vibrate gently, then bursts open—releasing a rich explosion of swirling chocolate, roasted hazelnuts, toast slices, strawberries, and golden syrup. The ingredients twirl mid-air in gravity-defying slow motion, assembling into a picture-perfect Nutella breakfast platter on a rustic wooden table.",

  "style": "photorealistic cinematic",

  "camera": "slow orbital shot from low angle upward, transitioning into an overhead top-down reveal",

  "lighting": "morning sunlight streaming through soft white curtains, gentle glow on chocolate and fruit highlights",

  "room": "cozy breakfast nook with wooden table, beige walls, ceramic mugs, and hanging plants",

  "elements": [
    "sealed Nutella jar (center of table)",
    "thick chocolate ribbons swirling through air",
    "flying toasted bread slices with golden crust",
    "hazelnuts spinning and cracking mid-air",
    "sliced bananas and strawberries tumbling gently",
    "honey and syrup droplets catching light",
    "knife spreading Nutella mid-air onto toast",
    "glass of milk and warm coffee cup floating into frame",
    "powdered sugar and cocoa mist drifting like fog"
  ],

  "motion": "jar shakes, lid pops and spins off, chocolate erupts upward with roasted hazelnuts orbiting it, toast slices fly in from off-screen, fruit slices rain down and assemble into a breakfast board as camera moves overhead",

  "ending": "a beautifully arranged Nutella breakfast board sits steaming on the table, chocolate glistening in the sunlight, with a final hazelnut rolling slowly to a stop near the jar",

  "text": "none",

  "keywords": [
    "16:9",
    "Nutella explosion",
    "hazelnuts",
    "swirling chocolate",
    "realistic food",
    "breakfast aesthetic",
    "slow motion",
    "natural morning light",
    "high detail",
    "no text",
    "chocolate swirl",
    "toast fly-in",
    "cinematic"
  ]
}`
            },
            {
                title: '5. Dior perfume ad',
                content: `{
"description": "Cinematic ultra-close-up of a Dior perfume bottle resting delicately on a polished marble
pedestal in an empty, misty hall. Dew-like droplets glisten on the glass. The bottle subtly shimmers-then the
perfume spritzes in slow motion. From the mist, silk fabrics flow outward, forming ethereal dresses that float
mid-air. Petals blossom and spiral upward, creating an enchanted garden suspended in time. Walls dissolve into
open sky. A chandelier of stars assembles above. A luminous figure, representing elegance, dances through the
floating petals as fragrance waves ripple through the scene. The entire space transforms into an otherworldly
Dior dreamscape. No text.",
"style": "cinematic, elegant magical realism",
"camera": "starts with an intimate macro shot of the bottle surface and droplets, slowly dollies back while
orbiting, then cranes upward to reveal the full ethereal transformation in sweeping, graceful motion",
"lighting": "soft morning light transitioning into golden glow, ending with a moonlit sparkle across the
scene",
"environment": "quiet marble hall transforms into an infinite floating garden above the clouds",
"elements": [
"Dior perfume bottle (logo subtly visible, glass texture detailed)",
"slow-motion perfume spritz with shimmering particles",
"silk fabrics flowing from mist, creating mid-air couture dresses",
"petals blooming and swirling upward",
"walls dissolving into sky",
"chandelier of stars forming piece by piece",
"luminous figure dancing through floating elements",
"light waves symbolizing fragrance spreading gracefully",
"reflections and refractions of light on marble and glass",
"a seamless blend of nature and luxury aesthetics"
],
"motion": "fluid, graceful chain reaction from the perfume spray-silks and petals animate in elegant
slow-motion mixed with time-lapse as the world transforms around the bottle",
"ending": "Dior perfume bottle in foreground, the surreal Dior dreamscape floating behind it, softly
glowing",
"text": "none",
"keywords": [
"Dior",
"perfume transformation",
"ethereal elegance",
"magical realism",
"luxury fashion",
"floating garden",
"silk and petals",
"dreamscape",
"cinematic",
"no text"
]
}`
            },
            {
                title: '6. Starbucks ad',
                content: `{
"description": "A cinematic, vibrant shot of a serene, sun-drenched coffee bar. At the center, a sleek
Starbucks cup (green logo glowing subtly) rests on a polished wood table. The cup begins to steam, pulses
softly, then the entire scene transforms dynamically: coffee beans scatter in slow motion, milk swirls mid-air,
ice cubes fall into place, and a cold brew assembles itself in a transparent cup with precision. A fresh bakery
item-a croissant-lands gently beside it. Warm tones of wood, green plants, and natural textures fill the
background, evoking calm energy. No text.",
"style": "cinematic, warm modern minimalism, sensory-rich",
"camera": "starts ultra close on cup logo, then smooth dolly out and gentle crane up to reveal the full
setup",
"lighting": "golden hour sunlight with soft shadows and warm highlights",
"environment": "cozy Starbucks interior with wooden textures, green plants, and ambient natural light",
"elements": [
"Starbucks cup (hot drink, logo subtly glowing)",
"cold brew coffee in clear Starbucks cup (ice dropping in slow motion)",
"coffee beans scattering and settling dynamically",
"milk swirling in mid-air, seamlessly blending into the coffee",
"fresh croissant landing softly on a wooden plate",
"polished wooden table with visible grain",
"small succulent plant for a natural touch",
"subtle ambient decor (e.g., bookshelf, green accents)",
"refined ceramic saucer and spoon",
"sunlight casting moving reflections through window blinds"
],
"motion": "Starbucks cup gently pulses with warmth, coffee elements assemble in a mesmerizing flow, cold brew
builds with cascading ice, bakery item lands with soft motion",
"ending": "a beautifully arranged Starbucks moment on the table, steam rising, ice sparkling, inviting and
serene",
"text": "none",
"keywords": [
"16:9",
"Starbucks",
"coffee ritual",
"warm aesthetic",
"dynamic assembly",
"natural light",
"golden hour",
"sensory",
"no text",
"inviting atmosphere"
]
}`
            },
            {
                title: '7. Apple ad',
                content: `{
"description": "An elegant, high-end animated sequence on a seamless soft white background. At the center, a
minimalist Apple-branded iPhone box (logo embossed subtly). The box levitates gently, opens with a slow,
graceful motion. Products-latest iPhone (edge lighting glowing softly), AirPods Pro (case opening with fluid
animation), MagSafe charger (magnetically snapping into place), and a sleek Apple Watch band (unfurling
delicately)-float into formation with precision. Silver, space gray, and ceramic white tones dominate, creating
a refined, sophisticated mood. No hard cuts-only smooth, continuous movement. Text: 'iPhone - Innovation
Refined.'",
"style": "cinematic, premium minimalism, Apple aesthetic",
"camera": "starts ultra close on embossed Apple logo, gentle dolly out with floating camera motion, subtle
parallax for depth",
"lighting": "soft, diffused illumination with delicate reflections and shadows, evoking a calm premium feel",
"room": "infinite seamless white environment-no walls, no floor-just soft gradients and floating products",
"elements": [
"Apple-branded iPhone box (subtle emboss, matte finish)",
"latest iPhone with subtle edge glow animation",
"AirPods Pro case with smooth lid animation",
"MagSafe charger snapping into place magnetically",
"Apple Watch band unfurling in slow motion",
"no extra decor-pure focus on the products"
],
"motion": "Box levitates gently, opens in a slow, elegant lift. Products float up, rotate gracefully, align
themselves into a symmetrical formation with seamless, natural motion-no sharp cuts.",
"ending": "Perfectly balanced Apple product display in a soft white space. 'iPhone - Innovation Refined' text
fades in with delicate typography.",
"text": "iPhone - Innovation Refined",
"keywords": [
"16:9",
"Apple",
"iPhone",
"minimalistic",
"premium aesthetic",
"silver, white, space gray",
"fluid assembly",
"elegant motion",
"soft lighting",
"no hard cuts",
"calm luxury"
]
}`
            },
            {
                title: '8. Corona ad',
                content: `{
"description": "Cinematic close-up of a cold, dewy Corona bottle sitting alone on a weathered beach table. It
begins to hum, vibrate. The bottle cap *pops*-and the entire environment unfolds from inside: palm trees rise,
lights string themselves, speakers assemble mid-air, sand shifts into a dance floor. A DJ booth builds from
driftwood. Music kicks in. A beach rave is born. No text.",
"style": "cinematic, magical realism",
"camera": "starts ultra close, zooms out and cranes overhead as the world expands",
"lighting": "sunset turning to neon-golden hour into party glow",
"environment": "quiet beach transforms into high-energy beach rave",
"elements": [
"Corona bottle (label visible, condensation dripping)",
"pop-top cap in slow motion",
"exploding citrus slice",
"sand morphing into dance floor",
"palm trees rising",
"neon lights snapping on",
"DJ booth building itself",
"crowd materializing mid-dance",
"fire pit lighting",
"surfboards as signage"
],
"motion": "explosion of elements from bottle, everything assembles in rapid time-lapse",
"ending": "Corona bottle in foreground, beach rave in full swing behind it",
"text": "none",
"keywords": [
"Corona",
"beach party",
"bottle transforms",
"rave build",
"sunset to night",
"cinematic",
"no text"
]
}`
            },
            {
                title: '9. IKEA ad',
                content: `{
"description": "Cinematic shot of a sunlit Scandinavian bedroom. A sealed IKEA box trembles, opens, and flat
pack furniture assembles rapidly into a serene, styled room highlighted by a yellow IKEA throw on the bed. No
text.",
"style": "cinematic",
"camera": "fixed wide angle",
"lighting": "natural warm with cool accents",
"room": "Scandinavian bedroom",
"elements": [
"IKEA box (logo visible)",
"bed with yellow throw",
"bedside tables",
"lamps",
"wardrobe",
"shelves",
"mirror",
"art",
"rug",
"curtains",
"reading chair",
"plants"
],
"motion": "box opens, furniture assembles precisely and rapidly",
"ending": "calm, modern space with yellow IKEA accent",
"text": "none",
"keywords": [
"16:9",
"IKEA",
"Scandinavian",
"fast assembly",
"no text",
"warm & cool tones"
]
}`
            },
            {
                title: '10. NYC skyline ad',
                content: `metadata:
prompt_name: "NYC City Assembly"
base_style: "cinematic, photorealistic, 4K"
aspect_ratio: "16:9"
city_description: "A vast, empty urban plaza at dawn, ground level view with concrete pavement stretching
into the mist."
camera_setup: "A single, fixed, wide-angle shot. The camera holds its position for the entire 8-second
duration."
key_elements:
- "A sealed steel shipping container stamped with 'NYC' in bold letters"
assembled_elements:
- "iconic Manhattan skyscrapers (e.g., Empire State Building, Chrysler Building)"
- "Brooklyn Bridge arching into frame"
- "yellow taxi cabs lined up along a street"
- "hydrant and classic black street lamps"
- "subway entrance staircase with MTA sign"
- "Statue of Liberty's torch and crown silhouette"
- "Central Park trees emerging in the background"
- "water towers perched on rooftop structures"
- "billboard frames and neon signs"
- "sidewalk café tables and chairs full of people"
negative_prompts: ["no text overlays", "no overt graphics"]
timeline:
- sequence: 1
timestamp: "00:00-00:01"
action: "In the center of the barren plaza sits the sealed NYC container. It begins to tremble as light fog
swirls around it."
audio: "Deep, resonant rumble echoing across empty concrete."
- sequence: 2
timestamp: "00:01-00:02"
action: "The container's steel doors burst open outward, releasing a spray of mist and loose rivets."
audio: "Sharp metallic clang, followed by hissing steam."
- sequence: 3
timestamp: "00:02-00:06"
action: "Hyper-lapse: From the fixed vantage, city elements rocket out of the container and lock into
place-steel beams rise, glass facades snap on, bridges span into view, and yellow taxis line up automatically."
audio: "A rapid sequence of ASMR city-building sounds: metal clanks, glass sliding, cables snapping,
engines revving softly."
- sequence: 4
timestamp: "00:06-00:08"
action: "The final element-a single yellow taxi-glides forward and parks beside the newfound curb. All
motion freezes as morning light bathes the fully formed New York Cityscape."
audio: "A soft engine cut-off 'chug,' then the distant hum of awakening city traffic, fading into serene
dawn silence."`
            },
            {
                title: '11. Transformers-style Mecha ad',
                content: `{
"description": "The scene opens on a smooth, metallic silver egg resting in the center of a vast, gritty
industrial hangar. Suddenly, glowing seams etch across its surface, and the egg doesn't unfold-it fractures.
With a surge of energy, armored plates unlock and pull back, revealing a complex mechanical skeleton within. In
a rapid, violent, and intricate sequence, components shift, rotate, and telescope outwards. Two massive legs
slam down onto the concrete floor, followed by a powerful tail whipping out for balance. The main body expands
upwards as a monstrous head, filled with razor-sharp metallic teeth, constructs itself piece by piece, all
originating from the initial egg's mass.",
"style": "Hyper-detailed, industrial mecha CGI. The aesthetic is inspired by 'Transformers' and 'Pacific Rim,'
focusing on complex, hard-surface mechanics, intricate moving parts, and a sense of immense weight and power.",
"camera": "A single, dynamic continuous shot. Starts as a close-up on the egg, then pulls back and orbits the
transformation, dipping low to the ground as the legs impact and craning up to reveal the final, massive scale
of the fully formed T-Rex. The camera shakes slightly with the impacts.",
"lighting": "Begins with stark, top-down industrial lighting on the egg. As the transformation begins, a
glowing blue power core ignites within the chest, casting internal light through the gaps in the armor. Sparks
fly from grinding metal parts. The final lighting is dominated by the T-Rex's own glowing red optical
sensors.",
"setting": "A vast, dark, and gritty industrial hangar with a weathered concrete floor and visible support
beams in the background, adding to the sense of scale.",
"elements": [
"smooth metallic silver egg",
"glowing energy seams",
"shifting armor plates",
"exposed pistons, gears, and hydraulics",
"a glowing internal power core",
"powerful robotic legs and claws",
"telescoping tail",
"razor-sharp metallic teeth",
"piercing red optical sensors (eyes)"
],
"motion": "A violent, multi-layered mechanical reconfiguration. The motion is not fluid but clunky and
purposeful, defined by panels sliding, parts rotating 180 degrees, and pistons firing to lock limbs into place.
It's a symphony of grinding gears, hissing pneumatics, and heavy, metallic 'clunks' as each component finds its
final position. The transformation should feel engineered and explosive.",
"ending": "The fully constructed robotic T-Rex stands in a low, predatory stance. It throws its head back, and
its optical sensors flare to life with a piercing red glow as it lets out a deafening, synthesized metallic
roar that echoes through the hangar.",
"text": "As the final transformation completes, steam erupts from vents on its neck and shoulders.",
"keywords": [
"mecha",
"robot",
"T-Rex",
"transformer",
"transformation",
"mechanical",
"industrial",
"hard surface modeling",
"CGI",
"sci-fi",
"complex",
"panel shifting",
"robot dinosaur",
"cybernetic",
"explosive"
]
}`
            },
            {
                title: '12. Grimoire Magic',
                content: `{
  "prompt": "An ultra-photorealistic, 8K video. The sequence of events in the timeline is mandatory and must occur in the specified order within 8 seconds. The 2D-to-3D transformation is the critical first step and must not be skipped.",
  "scene": {
    "environment": "A warm-lit grimoire page.",
    "subject": "A flat, black ink drawing. On the right, an young female elf with a heart-gem staff. On the left, a horde of 10 ink monsters clustered together."
  },
  "timeline": [
    {
      "time": "0-3 seconds",
      "event": "A finger touches the elf. This is the trigger. The flat ink of the elf and monsters immediately begins to swell and rise, unfolding from the page into fully photorealistic 3D characters. This is a physical awakening and is the main visual event of the first 3 seconds.",
        images: [
            { src: '/images/guide/practice/veo-prompts-1.jpg', caption: 'veo prompts example 1', prompt: 'veo prompts practice exercise example 1, creative project demonstration, step-by-step visual guide, educational content, clear composition' }
        ],
    },
    {
      "time": "3-4 seconds",
      "event": "Immediately after becoming fully 3D and standing on the page, the elf on the right powerfully slams the butt of her staff down.",
      "dialogue": "As the staff hits, her voice shouts with power: \"fire!\""
    },
    {
      "time": "4-7 seconds",
      "event": "A visible shockwave erupts FROM the staff's impact point. The wave travels directly from right to left, aimed ONLY at the monsters. The elf remains completely unaffected.",
      "details": "The monsters are thrown backward by the force and disintegrate into a cloud of dried ink particles. The page beneath them cracks and splinters from the energy.",
      "camera": "Tracks the shockwave as it travels and destroys the monsters."
    }
  ],
  "final_shot": "From 7 to 8 seconds, the shot shows the triumphant elf standing on the right side of the damaged page, as the ink dust from the monsters settles on the left.",
  "audio": {
    "category": "Epic & Forceful",
    "elements": [
      "magical rising/transformation sound",
      "heavy staff impact boom",
      "a powerful, clear shout",
      "a directional shockwave sound with cracking and shattering",
      "ink particles settling"
    ]
  },
  "mood": [
    "Epic",
    "Forceful",
    "Photorealistic",
    "Sequential",
    "Impactful"
  ]
}`
            }
        ]
    },

    // 팀별과제
    'team-assignments': {
        title: '팀별과제',
        koreanTitle: 'Team Assignments',
        type: 'team-videos',
        description: '각 팀이 제작한 창의적인 영상 작품들을 감상하실 수 있습니다.',
        teams: {
            team1: {
                name: '1팀',
                videos: [
                    {
                        title: '1팀 김지후 작품',
                        url: '/images/guide/practice/veo-prompts-v1.mp4',
                        thumbnail: '/images/guide/practice/veo-prompts-1.jpg',
                        description: '팀 1의 첫 번째 작품'
                    },
                    {
                        title: '1팀 우정식 작품',
                        url: '/images/guide/practice/veo-prompts-v2.mp4',
                        thumbnail: '/images/guide/practice/veo-prompts-2.jpg',
                        description: '팀 1의 두 번째 작품'
                    },
                    {
                        title: '영상 홍보영 제목 3',
                        url: '/images/guide/practice/veo-prompts-v3.mp4',
                        thumbnail: '/images/guide/practice/veo-prompts-3.jpg',
                        description: '팀 1의 세 번째 작품'
                    },
                    {
                        title: '영상 조민재 4',
                        url: '/images/guide/practice/veo-prompts-v4.mp4',
                        thumbnail: '/images/guide/practice/veo-prompts-4.jpg',
                        description: '팀 1의 네 번째 작품'
                    }
                ]
            },
            team2: {
                name: '2팀',
                videos: [
                    {
                        title: '영상 김성환 1',
                        url: '/images/guide/practice/veo-prompts-v5.mp4',
                        thumbnail: '/images/guide/practice/veo-prompts-5.jpg',
                        description: '팀 2의 첫 번째 작품'
                    },
                    {
                        title: '영상 이윤서 2',
                        url: '/images/guide/practice/veo-prompts-v6.mp4',
                        thumbnail: '/images/guide/practice/veo-prompts-6.jpg',
                        description: '팀 2의 두 번째 작품'
                    },
                    {
                        title: '영상 윤주철 3',
                        url: '/images/guide/practice/veo-prompts-v7.mp4',
                        thumbnail: '/images/guide/practice/veo-prompts-7.jpg',
                        description: '팀 2의 세 번째 작품'
                    },
                ]
            },
            team3: {
                name: '3팀',
                videos: [
                    {
                        title: '영상 제목 1',
                        url: '',
                        thumbnail: '/images/guide/practice/veo-prompts-8.jpg',
                        description: '팀 3의 첫 번째 작품'
                    },
                    {
                        title: '영상 제목 2',
                        url: '',
                        thumbnail: '/images/guide/practice/veo-prompts-9.jpg',
                        description: '팀 3의 두 번째 작품'
                    },
                    {
                        title: '영상 제목 3',
                        url: '',
                        thumbnail: '/images/guide/practice/veo-prompts-10.jpg',
                        description: '팀 3의 세 번째 작품'
                    },
                    {
                        title: '영상 제목 4',
                        url: '',
                        thumbnail: '/images/guide/practice/veo-prompts-11.jpg',
                        description: '팀 3의 네 번째 작품'
                    }
                ]
            }
        },
        images: [
            { src: '/images/guide/practice/team-assignments-1.jpg', caption: 'team assignments example 1', prompt: 'team assignments practice exercise example 1, creative project demonstration, step-by-step visual guide, educational content, clear composition' }
        ],
    },

    // ============= 튜토리얼 =============
    'tutorial-block1': {
        title: '[튜토리얼 1] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 1',
        koreanTitle: '블록 1: 캐릭터(Character)',
        prompt: '[블록 1: 캐릭터(Character)] 블록 조립하기',
        description: '안녕하세요! ai툴비입니다. 🐝\n\n여러분이 상상하는 이미지를 완벽하게 만들어내기 위한 <strong style="color: #ff8e53;">\'궁극의 프롬프트 조립\'</strong> 퀘스트를 시작하겠습니다.\n\n그 첫 번째 퀘스트는 이미지의 심장, <strong style="color: #4caf50 ;">\'[캐릭터(Character)]\'</strong> 블록입니다!\n\n\'캐릭터\'는 이미지의 \'주인공\'입니다. 하지만 그냥 a girl (소녀)이라고만 하면, AI는 \'어떤 소녀?\'인지 몰라 무작위로 이미지를 생성합니다.\n\n이번 퀘스트에서는 우리가 원하는 주인공을 AI가 정확히 그려낼 수 있도록, 3개의 작은 부품을 조립하여 [캐릭터] 블록을 완성해 보겠습니다.',
        type: 'tutorial',
        audioFile: 'character.wav',
        parts: [
            {
                title: '▶ 부품 1-1: 핵심 정체성 (Core Identity)',
                description: '가장 먼저, 주인공이 <strong style="color: #ff6b6b;">\'누구\'</strong>인지, 또는 <strong style="color: #ff6b6b;">\'무엇\'</strong>인지 정체를 알려줘야 합니다.',
                keywords: [
                    'a warrior (전사)',
                    'a wizard (마법사)',
                    'a girl (소녀)',
                    'a cyborg (사이보그)',
                    'a robot (로봇)',
                    'an alien (외계인)',
                    'a cat (고양이)',
                    'a dragon (용)'
                ],
                example: 'a girl'
            },
            {
                title: '▶ 부품 1-2: 외형 묘사 (Appearance)',
                description: '다음으로, 주인공의 \'외모\'를 구체적으로 묘사합니다. 이 부품이 AI의 <strong style="color: #ff6b6b;">\'무작위성\'</strong>을 없애는 핵심입니다!',
                keywords: [
                    '(인종/국적) young Korean girl, American teenager',
                    '(머리 스타일) girl with short red hair, boy with blond curly hair',
                    '(얼굴 특징) with glowing blue eyes, with freckles, wearing glasses'
                ],
                example: 'a young Korean girl with short black hair'
            },
            {
                title: '▶ 부품 1-3: 의상 (Attire)',
                description: '마지막으로, 주인공이 <strong style="color: #ff6b6b;">\'무엇을 입고있는지\'</strong> 알려주세요. 의상은 캐릭터의 직업이나 상황을 보여주는 중요한 단서입니다.',
                keywords: [
                    'wearing a blue dress (파란 드레스를 입은)',
                    'wearing a school uniform (교복을 입은)',
                    'in futuristic cyberpunk armor (미래형 사이버펑크 갑옷을 입은)',
                    'wearing a yellow raincoat (노란색 비옷을 입은)',
                    'in a white scientist gown (흰색 과학자 가운을 입은)'
                ],
                example: 'wearing a yellow raincoat'
            }
        ],
        completion: {
            title: '🏆 퀘스트 1 완료!',
            message: '축하합니다! 3개의 부품을 모두 모아 드디어 첫 번째 [캐릭터] 블록 조립을 완료했습니다!',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat',
            image: '/images/guide/practice/veo-prompts-1.jpg',
            status: '<strong style="color: #ff6b6b;">\'캐릭터(Character)\'</strong> → 행동(Action) → 소품(Props) → 배경(Setting) → 스타일(Style) → 조명&시간(Lighting&Time) → 카메라(Camera)',
            nextStep: '어떤가요? 그냥 \'소녀\'라고 했을 때보다 훨씬 더 구체적이고 흥미로운 주인공이 만들어졌죠?\n\n자, 이제 이 멋진 주인공이 \'무엇을 하고 있는지\' 정해줄 차례입니다.\n다음 챕터, \'블록 2: 행동(Action)\' 퀘스트에서 계속됩니다!'
        },
        usage: [
            '📜 퀘스트 1: \'캐릭터\' 블록 조립하기',
            '',
            '▶ 부품 1-1: 핵심 정체성 (Core Identity)',
            '가장 먼저, 주인공이 <strong style="color: #ff6b6b;">\'누구\'</strong>인지, 또는 <strong style="color: #ff6b6b;">\'무엇\'</strong>인지 정체를 알려줘야 합니다.',
            '',
            '키워드 예시 (Keywords):',
            '• a warrior (전사)',
            '• a wizard (마법사)',
            '• a girl (소녀)',
            '• a cyborg (사이보그)',
            '• a robot (로봇)',
            '• an alien (외계인)',
            '• a cat (고양이)',
            '• a dragon (용)',
            '',
            '"저는 **a girl (소녀)**를 주인공으로 선택해 볼게요!"',
            '',
            '▶ 부품 1-2: 외형 묘사 (Appearance)',
            '다음으로, 주인공의 \'외모\'를 구체적으로 묘사합니다. 이 부품이 AI의 \'무작위성\'을 없애는 핵심입니다!',
            '',
            '키워드 예시 (Keywords):',
            '• (인종/국적) young Korean girl, American teenager',
            '• (머리 스타일) girl with short red hair, boy with blond curly hair',
            '• (얼굴 특징) with glowing blue eyes, with freckles, wearing glasses',
            '',
            '"저는 a girl을 더 구체적으로 만들 거예요. **a young Korean girl with short black hair (검은 단발머리의 어린 한국 소녀)**로 정했습니다."',
            '',
            '▶ 부품 1-3: 의상 (Attire)',
            '마지막으로, 주인공이 \'무엇을 입고 있는지\' 알려주세요. 의상은 캐릭터의 직업이나 상황을 보여주는 중요한 단서입니다.',
            '',
            '키워드 예시 (Keywords):',
            '• wearing a blue dress (파란 드레스를 입은)',
            '• wearing a school uniform (교복을 입은)',
            '• in futuristic cyberpunk armor (미래형 사이버펑크 갑옷을 입은)',
            '• wearing a yellow raincoat (노란색 비옷을 입은)',
            '• in a white scientist gown (흰색 과학자 가운을 입은)',
            '',
            'wearing a yellow raincoat',
            '',
            '🏆 퀘스트 1 완료!',
            '축하합니다! 3개의 부품을 모두 모아 드디어 첫 번째 [캐릭터] 블록 조립을 완료했습니다!',
            '',
            '(조립된 [캐릭터] 블록)',
            '[a young Korean girl with short black hair, wearing a yellow raincoat]',
            '',
            '(현재 프롬프트 조립 상태)',
            '캐릭터(Character) → <strong style="color: #ff6b6b;">행동(Action)\'</strong> → 소품(Props) → 배경(Setting) → 스타일(Style) → 조명&시간(Lighting&Time) → 카메라(Camera)',
            '',
            '어떤가요? 그냥 \'소녀\'라고 했을 때보다 훨씬 더 구체적이고 흥미로운 주인공이 만들어졌죠?',
            '',
            '자, 이제 이 멋진 주인공이 \'무엇을 하고 있는지\' 정해줄 차례입니다.',
            '다음 챕터, \'블록 2: 행동(Action)\' 퀘스트에서 계속됩니다!'
        ],
        images: []
    },

    'tutorial-block2': {
        title: '[튜토리얼 2] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 2',
        koreanTitle: '블록 2: 행동(Action)',
        prompt: '[블록 2: 행동(Action)] 블록 장착하기',
        description: '안녕하세요! ai툴비입니다. 🐝\n\n지난 챕터에서 우리는 3개의 부품을 조립해 멋진 [캐릭터] 블록을 완성했습니다. (예: a young Korean girl with short black hair, wearing a yellow raincoat)\n\n하지만 이 캐릭터는 아직 \'무엇을 할지\' 정해지지 않은 상태입니다. 캐릭터가 그냥 멍하니 서 있기만 한다면 조금 심심하겠죠?\n\n두 번째 퀘스트, [행동(Action)] 블록은 우리 주인공에게 \'생명\'을 불어넣는 퀘스트입니다. 서 있는 전사와 달리고 있는 전사는 완전히 다른 이야기를 만드니까요!',
        type: 'tutorial',
        audioFile: 'action.wav',
        parts: [
            {
                title: '1. 정적인 행동 (Static Actions)',
                description: '주로 인물의 상태나 모습을 강조할 때 사용합니다. (인물 사진이나 초상화에 유용해요!)',
                keywords: [
                    'standing : 서 있는',
                    'sitting : 앉아 있는',
                    'lying down : 누워 있는',
                    'looking at the camera : 카메라를 응시하는',
                    'leaning against a wall : 벽에 기대어 있는',
                    'smiling : 미소짓는'
                ],
                example: 'standing and looking at the camera'
            },
            {
                title: '2. 동적인 행동 (Dynamic Actions)',
                description: '이미지에 \'움직임\'과 \'스토리\'를 부여합니다. (역동적인 장면 연출에 필수!)',
                keywords: [
                    'walking : 걷고 있는',
                    'running : 달리고 있는',
                    'jumping : 점프하는',
                    'dancing : 춤추는',
                    'fighting : 싸우는',
                    'flying : 날아다니는'
                ],
                example: 'walking'
            },
            {
                title: '3. 구체적인 행동 (Specific Actions)',
                description: '캐릭터의 직업이나 상황을 더 구체적으로 설명하는 행동입니다.',
                keywords: [
                    'reading a book : 책을 읽는',
                    'casting a spell : 마법을 거는',
                    'building a house : 집을 짓는',
                    'typing on a keyboard : 키보드를 치는',
                    'opening a door : 문을 여는',
                    'holding a cup : 컵을 들고 있는'
                ],
                example: 'reading a book'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"동작(Action)과 시선(Gaze)을 조합하세요!"\n\n[행동] 블록을 더 풍부하게 만드는 비결은 \'시선\'을 함께 지정하는 것입니다.\n\n그냥 sitting (앉아 있는) 대신,\nsitting and looking up at the sky (앉아서 하늘을 올려다보는)\n\n그냥 walking (걷고 있는) 대신,\nwalking and looking at the camera (걸으면서 카메라를 쳐다보는)\n\n이렇게 \'동작 + 시선\'을 조합하면, AI는 훨씬 더 감성적이고 구체적인 장면을 연출해 냅니다!'
        },
        completion: {
            title: '🏆 퀘스트 2 완료!',
            message: '자, 이제 두 번째 [행동] 블록을 장착해 볼까요?',
            choice: '저는 1챕터의 제 캐릭터 노란 우비를 입은 소녀에게 어울리는 <strong style="color: #ff6b6b;">Walking 걷고있는\</strong>을 선택할게요. 비옷을 입었으니 어딘가를 걷고 있는 게 자연스럽겠죠?',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat, walking',
            image: '/images/guide/practice/team-assignments-1.jpg',
            status: '캐릭터(Character) → <strong style="color: #ff6b6b;">행동(Action)\'</strong> → 소품(Props) → 배경(Setting) → 스타일(Style) → 조명&시간(Lighting&Time) → 카메라(Camera)',
            nextStep: '캐릭터가 정해졌고, 무엇을 하는지도 정해졌습니다. 그런데... 혹시 캐릭터가 손에 뭔가를 들고 있지는 않나요? (예를 들어, 노란 우비 소녀가 \'빨간 우산\'을 들고 있다면?)\n\n다음 챕터, \'블록 3: 소품(Props)\' 퀘스트에서 이어서 진행하겠습니다! 계속할까요?'
        },
        usage: [],
        images: []
    },

    'tutorial-block3': {
        title: '[튜토리얼 3] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 3',
        koreanTitle: '블록 3: 소품(Props)',
        prompt: '[블록 3: 소품(Props)] 블록 장착하기',
        description: '안녕하세요! 여러분의 AI 가이드, ai툴비입니다. 🐝\n\n우리는 지난 퀘스트까지 \'누가\'(캐릭터) \'무엇을 하는지\'(행동) 정했습니다. (예: a young Korean girl... wearing a yellow raincoat + walking)\n\n이제 세 번째 퀘스트입니다. 혹시 여러분의 캐릭터가 손에 무언가를 들고 있진 않나요? 아니면 어깨에 가방을 메고 있거나, 허리에 칼을 차고 있을 수도 있죠.\n\n[소품(Props)] 블록은 캐릭터의 \'이야기\'를 더 풍부하게 만들어주는 아이템을 추가하는 퀘스트입니다. 전사가 빛나는 마법 검을 들고 있다면 그 스토리가 완전히 달라지겠죠?',
        type: 'tutorial',
        audioFile: 'props.wav',
        parts: [
            {
                title: '1. 손에 든 소품 (Hand-held Props)',
                description: '캐릭터가 직접 \'들고\' 있거나 \'사용 중\'인 아이템입니다.',
                keywords: [
                    'holding a magic sword (마법 검을 들고 있는)',
                    'holding a glowing book (빛나는 책을 들고 있는)',
                    'holding a red umbrella (빨간 우산을 들고 있는)',
                    'holding a cup of coffee (커피잔을 들고 있는)',
                    'holding a smartphone (스마트폰을 들고 있는)'
                ],
                example: 'holding a transparent umbrella'
            },
            {
                title: '2. 착용/소지한 소품 (Worn / Carried Props)',
                description: '\'의상\'(Attire)과는 조금 다릅니다. 캐릭터가 소지한 기능적인 아이템을 말합니다.',
                keywords: [
                    'with a backpack (백팩을 메고 있는)',
                    'with a guitar on their back (등에 기타를 멘)',
                    'wearing a magical amulet (마법의 목걸이를 착용한)',
                    'with a camera around their neck (목에 카메라를 건)',
                    'with a gas mask (방독면을 쓴)'
                ],
                example: 'with a backpack'
            },
            {
                title: '3. 주변 소품 (Environmental Props)',
                description: '캐릭터가 직접 소유한 것은 아니지만, 캐릭터와 \'함께 있는\' 중요한 물체입니다.',
                keywords: [
                    'a robot dog by their side (옆에 로봇 개가 있는)',
                    'a cat sitting on their lap (무릎에 고양이가 앉아 있는)',
                    'a campfire in front of them (앞에 캠프파이어가 있는)',
                    'a motorcycle next to them (옆에 오토바이가 있는)'
                ],
                example: 'a cat sitting on their lap'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"with" 또는 "holding"으로 자연스럽게 붙여주세요!\n\n[소품] 블록을 [캐릭터]나 [행동] 블록에 연결하는 가장 쉬운 방법은 with (~와 함께) 또는 holding (~을 들고)이라는 \'접착제\' 키워드를 사용하는 것입니다.\n\n(조합 예시)\n[캐릭터: a warrior] + [행동: standing] + with a broken shield (부서진 방패와 함께)\n\n(조합 예시)\n[캐릭터: a girl] + [행동: sitting] + holding a cat (고양이를 안고)\n\n이렇게 하면 AI가 "아, 이 소품이 캐릭터와 연결된 것이구나!"라고 훨씬 명확하게 이해합니다.'
        },
        completion: {
            title: '🏆 퀘스트 3 완료!',
            message: '자, 이제 세 번째 [소품] 블록을 장착할 시간입니다.',
            choice: '저는 1, 2챕터의 제 캐릭터(노란 우비를 입고 걷는 소녀)에게 어울리게, <strong style="color: #ff6b6b;">"holding a transparent umbrella"</strong> (투명한 우산을 들고 있는)를 추가할게요. 노란 비옷과 투명한 우산, 정말 잘 어울릴 것 같지 않나요?"',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella',
            image: '/images/guide/tutorial/tutorial-block1-1.jpg',
            status: '캐릭터(Character) → 행동(Action) → <strong style="color: #ff6b6b;">소품(Props)\'</strong>  → 배경(Setting) → 스타일(Style) → 조명&시간(Lighting&Time) → 카메라(Camera)',
            nextStep: '이제 멋진 주인공이 완성되었습니다! 캐릭터, 행동, 소품까지 모두 정해졌네요.\n\n그렇다면... 이 주인공은 \'어디에\' 서 있는 걸까요? 숲속? 도시? 아니면 텅 빈 방?\n\n다음 챕터, \'블록 4: 배경(Setting)\' 퀘스트에서 이 모든 것을 결정합니다! 계속 진행할까요?'
        },
        usage: [],
        images: []
    },

    'tutorial-block4': {
        title: '[튜토리얼 4] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 4',
        koreanTitle: '블록 4: 배경(Setting)',
        prompt: '[블록 4: 배경(Setting)] 블록 장착하기',
        description: '안녕하세요! ai툴비입니다. 🐝\n\n우리는 드디어 주인공(캐릭터, 행동, 소품)을 완벽하게 만들었습니다! (현재 프롬프트: a young Korean girl... walking, holding a transparent umbrella)\n\n그런데... 이 멋진 주인공이 지금 \'어디에\' 있나요? 텅 빈 흰색 공간에 떠 있다면 너무 어색하겠죠?\n\n네 번째 퀘스트, [배경(Setting)] 블록은 우리 주인공을 멋진 무대 위에 세워주는, 이미지의 \'공간\'을 창조하는 퀘스트입니다.',
        type: 'tutorial',
        audioFile: 'setting.wav',
        parts: [
            {
                title: '1. 🏙️ 야외 / 도시 (Outdoor / City)',
                description: '가장 보편적인 배경입니다. 도시의 거리, 공원, 혹은 판타지 속 장소를 설정할 수 있습니다.',
                keywords: [
                    'in a futuristic city (미래형 도시에서)',
                    'in a rainy street (비 오는 거리에서)',
                    'in a crowded market (붐비는 시장에서)',
                    'on a neon-lit street (네온 불빛이 빛나는 거리에서)'
                ],
                example: 'in a rainy city street at night'
            },
            {
                title: '2. 🌲 야외 / 자연 (Outdoor / Nature)',
                description: '숲, 바다, 산 등 광활한 자연을 무대로 설정합니다.',
                keywords: [
                    'in an enchanted forest (마법에 걸린 숲에서)',
                    'on a mountain top (산 정상에서)',
                    'on a beach at sunset (해질녘 해변에서)',
                    'in a dark, foggy forest (어둡고 안개 낀 숲에서)'
                ],
                example: 'in an enchanted forest'
            },
            {
                title: '3. 🏠 실내 (Indoor)',
                description: '도서관, 방, 카페 등 특정 건물 내부를 배경으로 합니다.',
                keywords: [
                    'in a cozy library (아늑한 도서관에서)',
                    'in a high-tech lab (첨단 연구실에서)',
                    'inside a spaceship cockpit (우주선 조종석에서)',
                    'in a minimalist room (미니멀한 방 안에서)'
                ],
                example: 'in a cozy library'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"in", "on", "at" 같은 전치사를 사용하세요!\n\n[배경] 블록을 자연스럽게 연결하는 가장 좋은 \'접착제\'는 in (안에), on (위에), at (에서) 같은 \'전치사\'입니다.\n\n(나쁜 예) a warrior a castle\n(AI가 \'전사와 성\'을 따로 그릴 수 있습니다.)\n\n(좋은 예)\na warrior in a castle (성 \'안에\' 있는 전사)\na warrior on a castle wall (성벽 \'위에\' 있는 전사)\n\n전치사 하나로 캐릭터와 배경의 관계가 명확해집니다!'
        },
        completion: {
            title: '🏆 퀘스트 4 완료!',
            message: '이제 네 번째 [배경] 블록을 장착할 차례입니다.',
            choice: '"제 캐릭터는 \'노란 우비\'를 입고 \'투명 우산\'을 들고 있으니, <strong style="color: #ff6b6b;">in a rainy city street at night</strong>(밤에 비 오는 도시 거리에서)를 선택할게요. 비 오는 밤거리와 노란 우비, 색감 대비가 멋질 것 같아요!"',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night',
            image: '/images/guide/tutorial/tutorial-block1-1.jpg',
            status: '캐릭터(Character) → 행동(Action) → 소품(Props) → <strong style="color: #ff6b6b;">배경(Setting)\'</strong> → 스타일(Style) → 조명&시간(Lighting&Time) → 카메라(Camera)',
            nextStep: '자, 4개의 블록이 모두 조립되었습니다! 완성된 프롬프트를 볼까요?\n\n이제 거의 다 왔습니다! 주인공이 어디서 무엇을 하는지 모두 정해졌네요.\n\n그런데 이 멋진 장면을 **\'어떤 화풍\'**으로 그릴까요? 실사처럼? 애니메이션처럼? 아니면 유화처럼?\n\n다음 챕터, \'블록 5: 스타일(Style)\' 퀘스트에서 이미지의 \'느낌\'을 결정합니다! 계속 진행할까요?'
        },
        usage: [],
        images: []
    },

    'tutorial-block5': {
        title: '[튜토리얼 5] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 5',
        koreanTitle: '블록 5: 스타일(Style)',
        prompt: '[블록 5: 스타일(Style)] 블록 장착하기',
        description: '안녕하세요! ai툴비입니다. 🐝\n\n지금까지 4개의 퀘스트를 완료하면서, 우리는 \'누가, 어디서, 무엇을 하는지\'에 대한 완벽한 \'설계도\'를 만들었습니다.\n\n(현재까지 조립된 풀 프롬프트 예시)\na young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night\n\n이제 5번째 퀘스트입니다. 이 설계도를 가지고 **\'어떤 화풍\'**으로 이미지를 \'건축\'할지 결정할 차례입니다.\n\n[스타일(Style)] 블록은 이미지의 전체적인 \'느낌(Vibe)\'과 \'질감(Medium)\'을 결정하는, 가장 강력한 마법 블록입니다. 이 블록 하나만 바꿔도 실사 사진이 애니메이션이 되거나 유화가 될 수 있거든요!',
        type: 'tutorial',
        audioFile: 'style.wav',
        parts: [
            {
                title: 'A. 📸 실사 계열 (Realism)',
                description: '사진처럼 극도로 사실적인 느낌을 줍니다.',
                keywords: [
                    'photorealistic (실사 사진처럼)',
                    'hyperrealistic (극사실주의)',
                    '3D render (3D 렌더)',
                    'Octane render (옥테인 렌더, 극사실적 3D)',
                    'Unreal Engine 5 (언리얼 엔진, 고품질 게임 그래픽)'
                ],
                example: 'photorealistic'
            },
            {
                title: 'B. 🎬 애니메이션 계열 (Animation)',
                description: '만화 영화처럼 표현합니다. 친숙하고 매력적인 스타일이죠.',
                keywords: [
                    'anime style (일본 애니메이션 스타일)',
                    'Studio Ghibli style (스튜디오 지브리 스타일)',
                    'Pixar style (픽사 3D 애니 스타일)',
                    'cartoon style (미국 카툰 스타일)',
                    'Claymation (클레이 애니메이션)'
                ],
                example: 'anime style'
            },
            {
                title: 'C. 🎨 회화 / 일러스트 계열 (Painting / Illustration)',
                description: '아티스트의 손길이 느껴지는 그림 스타일입니다.',
                keywords: [
                    'digital painting (디지털 페인팅)',
                    'concept art (콘셉트 아트)',
                    'illustration (일러스트레이션)',
                    'oil painting (유화)',
                    'watercolor (수채화)',
                    'pencil sketch (연필 스케치)'
                ],
                example: 'digital painting'
            },
            {
                title: 'D. 🕶️ 특정 분위기 계열 (Aesthetic / Vibe)',
                description: '특정 세계관이나 감성을 이미지 전체에 덧씌웁니다.',
                keywords: [
                    'cyberpunk (사이버펑크)',
                    'steampunk (스팀펑크)',
                    'fantasy art (판타지 아트)',
                    'minimalist (미니멀리스트)',
                    'lo-fi aesthetic (로파이 감성)',
                    'gothic (고딕)'
                ],
                example: 'lo-fi aesthetic'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"스타일 블록은 \'조합\'할 수 있어요! (Vibe + Medium)"\n\n[스타일] 블록의 진정한 힘은 \'조합\'에 있습니다. [D. 분위기 계열] 키워드와 [A, B, C 계열] 키워드를 함께 사용해 보세요!\n\n(조합 예시 1)\nfantasy art (판타지 분위기) + digital painting (디지털 페인팅)\n\n(조합 예시 2)\ncyberpunk (사이버펑크 분위기) + anime style (애니 스타일)\n\n(조합 예시 3)\nlo-fi aesthetic (로파이 감성) + illustration (일러스트)\n\n이렇게 하면 \'사이버펑크풍의 애니메이션\'처럼 훨씬 더 구체적이고 독창적인 스타일을 만들 수 있습니다.'
        },
        completion: {
            title: '🏆 퀘스트 5 완료!',
            message: '이제 다섯 번째 [스타일] 블록을 장착해 봅시다.',
            choice: '저는 \'비 오는 밤거리\'와 \'소녀\'의 감성을 잘 살릴 수 있도록, 꿀팁에서 배운 \'조합\'을 사용해 볼게요!"\n\n <strong style="color: #ff6b6b;">\'anime style\'</strong> (애니 스타일) + <strong style="color: #ff6b6b;">\'lo-fi aesthetic\'</strong> (로파이 감성)\n\n"비 오는 날의 차분하고 편안한 애니메이션 느낌, 정말 기대되지 않나요?"',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night, anime style, lo-fi aesthetic',
            image: '/images/guide/tutorial/tutorial-block2-1.jpg',
            status: '캐릭터(Character) → 행동(Action) → 소품(Props) → 배경(Setting) → <strong style="color: #ff6b6b;">\'스타일(Style)\'</strong> → 조명&시간(Lighting&Time) → 카메라(Camera)',
            nextStep: '5개의 블록이 모두 조립되었습니다! 완성된 프롬프트를 확인해 보세요.\n\n와! 이제 정말 멋진 장면이 머릿속에 그려집니다.\n\n그런데... \'비 오는 밤거리\'의 \'빛\'을 조금 더 극적으로 만들고 싶지 않으신가요? 예를 들어, \'네온사인\' 불빛이 비에 젖은 바닥에 반사되는 것처럼요!\n\n다음 챕터, \'블록 6: 조명 & 시간(Lighting & Time)\' 퀘스트에서 이 \'빛\'을 디자인해 보겠습니다! 계속할까요?'
        },
        usage: [],
        images: []
    },

    'tutorial-block6': {
        title: '[튜토리얼 6] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 6',
        koreanTitle: '블록 6: 조명 & 시간(Lighting & Time)',
        prompt: '[블록 6: 조명 & 시간(Lighting & Time)] 블록 장착하기',
        description: '안녕하세요! ai툴비입니다. 🐝\n\n우리는 5개의 블록을 조립해 \'어떤 장면\'을 \'어떤 스타일\'로 그릴지 완벽하게 기획했습니다.\n\n(현재까지 조립된 풀 프롬프트 예시)\na young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night, anime style, lo-fi aesthetic\n\n자, 6번째 퀘스트입니다! 우리는 [배경] 블록에서 이미 at night (밤)이라고 \'시간\'을 지정했습니다.\n\n하지만 [조명 & 시간] 블록은 여기서 한 걸음 더 나아가, 그 \'밤\'의 \'빛\'을 **"어떻게 디자인할 것인가?"**를 결정하는 퀘스트입니다. 그냥 \'어두운 밤\'이 아니라, \'감성적인 밤\'을 만들어야죠!',
        type: 'tutorial',
        audioFile: 'lighting.wav',
        parts: [
            {
                title: '1. 🕰️ \'시간\' 블록 (Time - 감성 숏컷)',
                description: '이 키워드들은 그 자체로 강력한 \'조명\'과 \'분위기\'를 포함하고 있습니다.',
                keywords: [
                    'golden hour (골든 아워 - 따뜻하고 부드러운 빛)',
                    'blue hour (블루 아워 - 해질녘의 차갑고 푸른 빛)',
                    'sunset / sunrise (일몰 / 일출)',
                    'midnight (자정 - 더 깊은 밤)',
                    '1980s / Victorian era (특정 시대의 색감과 분위기)'
                ],
                example: 'golden hour'
            },
            {
                title: '2. 💡 \'조명\' 블록 - 자연광/분위기광',
                description: '\'시간\'을 정했더라도, \'어떤 광원\'이 비추는지 구체적으로 지정하면 퀄리티가 훨씬 올라갑니다.',
                keywords: [
                    'moonlight (달빛)',
                    'candlelight (촛불)',
                    'firelight (모닥불)',
                    'glowing streetlights (빛나는 가로등)',
                    'car headlights (자동차 헤드라이트)',
                    'warm light from shop windows (가게 창문에서 새어 나오는 따뜻한 불빛)',
                    'bioluminescent (생물 발광, 판타지 숲 등)'
                ],
                example: 'glowing streetlights and warm light from shop windows'
            },
            {
                title: '3. 🎬 극적 조명 (Dramatic Lighting)',
                description: '영화처럼 극적인 빛의 효과를 만들어냅니다.',
                keywords: [
                    'cinematic lighting (영화적 조명, 강한 대비)',
                    'volumetric lighting (부피감이 느껴지는 빛, 안개 속 빛줄기)',
                    'rim lighting (림 라이팅, 캐릭터의 외곽선을 비추는 역광)',
                    'dramatic shadows (극적인 그림자)'
                ],
                example: 'cinematic lighting'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"\'시간\'과 \'조명\'은 항상 둘 다 필요한가요?"\n\n아닙니다! \'시간\' 블록은 그 자체로 조명 값을 포함합니다. golden hour라고 쓰면 굳이 warm light를 또 쓸 필요가 없죠.\n\n[시간] 블록은 \'전체적인 분위기\'를 잡을 때 쓰세요.\n[조명] 블록은 \'특정 광원\'을 눈에 보이게 그리고 싶을 때 쓰세요. (예: glowing streetlights)\n\n[배경]에서 at night를 썼다면, [조명] 블록에서 glowing streetlights를 추가해 \'어떤 밤인지\'를 구체화하는 것이 좋습니다!'
        },
        completion: {
            title: '🏆 퀘스트 6 완료!',
            message: '이제 여섯 번째 [조명 & 시간] 블록을 장착해 봅시다.',
            choice: '\'네온사인\' 대신, \'로파이(lo-fi)\' 감성에 어울리는 따뜻한 불빛을 선택할게요."\n\n"비 오는 밤거리에 <strong style="color: #ff6b6b;">\'glowing streetlights\'</strong> (빛나는 가로등) 불빛과 <strong style="color: #ff6b6b;">\'warm light from shop windows\'</strong> (가게 창문에서 새어 나오는 따뜻한 불빛)**이 젖은 바닥에 반사되는 모습을 상상했어요!',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night, anime style, lo-fi aesthetic, glowing streetlights and warm light from shop windows',
            image: '/images/guide/tutorial/tutorial-block3-1.jpg',
            status: '캐릭터(Character) → 행동(Action) → 소품(Props) → 배경(Setting) → 스타일(Style) → <strong style="color: #ff6b6b;">\'조명&시간(Lighting&Time)\'</strong> → 카메라(Camera)',
            nextStep: '6개의 블록이 모두 조립되었습니다! 프롬프트가 훨씬 더 풍부해졌네요!\n\n드디어 마지막 퀘스트입니다! 우리는 이제 \'어떤 장면\'을 그릴지 완벽하게 기획했습니다.\n\n이제 이 장면을 \'어떤 카메라로\', \'어떤 각도에서\' 찍을지만 결정하면 됩니다!\n\n마지막 퀘스트, \'블록 7: 카메라(Camera)\' 퀘스트에서 이 모든 것을 마무리합니다! 계속 진행할까요?'
        },
        usage: [],
        images: []
    },

    'tutorial-block7': {
        title: '[튜토리얼 7] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 7 (최종)',
        koreanTitle: '블록 7: 카메라(Camera)',
        prompt: '[블록 7: 카메라(Camera)] 블록 장착하기',
        description: '안녕하세요! 여러분의 AI 가이드, ai툴비입니다. 🐝\n\n우리는 6개의 퀘스트를 통해 \'어떤 장면\'을 \'어떤 스타일\'과 \'어떤 빛\'으로 그릴지 완벽하게 기획했습니다.\n\n(현재까지 조립된 풀 프롬프트 예시)\na young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night, anime style, lo-fi aesthetic, glowing streetlights and warm light from shop windows\n\n이제 정말 마지막 퀘스트입니다. 이 멋진 장면을 "어떻게, 어떤 각도에서 찍을 것인지" 결정할 차례입니다.\n\n[카메라(Camera)] 블록은 우리가 \'관찰자\'가 되어 이미지의 \'시점\'과 \'구도\'를 정하는, 감독의 큐사인과도 같은 블록입니다!',
        type: 'tutorial',
        audioFile: 'camera.wav',
        parts: [
            {
                title: '1. 샷 크기 (Shot Size)',
                description: '얼마나 가깝게 찍을지를 결정합니다. 인물 중심인지, 배경 중심인지 정하는 핵심이죠.',
                keywords: [
                    'close-up shot (클로즈업: 인물의 얼굴과 감정에 집중)',
                    'medium shot (미디엄 샷: 인물의 상반신과 약간의 배경)',
                    'full shot (풀 샷: 인물의 전신을 보여줌)',
                    'wide shot (와이드 샷: 인물보다 배경을 더 넓게 보여줌)',
                    'extreme wide shot (익스트림 와이드 샷: 웅장한 풍경 속 인물)'
                ],
                example: 'wide shot'
            },
            {
                title: '2. 카메라 앵글 (Camera Angle)',
                description: '어떤 높이에서 찍을지를 결정합니다. 앵글에 따라 인물의 느낌이 완전히 달라집니다.',
                keywords: [
                    'eye level shot (아이 레벨: 가장 표준적인 눈높이)',
                    'low angle shot (로우 앵글: 아래에서 위로, 인물이 웅장해 보임)',
                    'high angle shot (하이 앵글: 위에서 아래로, 인물이 아담해 보임)',
                    'bird\'s eye view (버즈 아이 뷰: 하늘에서 수직으로 내려다봄)',
                    'worm\'s eye view (웜즈 아이 뷰: 바닥에 붙어 위를 봄)'
                ],
                example: 'eye level shot'
            },
            {
                title: '3. 렌즈 효과 / 구도 (Lens / Composition)',
                description: '전문적인 촬영 효과를 추가합니다.',
                keywords: [
                    'bokeh (보케: 배경의 불빛을 동그랗게 뭉개는 효과)',
                    'shallow depth of field (얕은 심도: 아웃포커싱, 배경 흐림)',
                    'deep focus (깊은 심도: 배경까지 모두 선명함)',
                    'rule of thirds (삼등분 법칙: 안정적인 구도)'
                ],
                example: 'bokeh'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"\'카메라\' 블록은 프롬프트의 \'맨 앞\'에 두세요!"\n\n[카메라] 블록의 키워드(예: medium shot)는 다른 블록들과 달리, 프롬프트의 맨 앞에 두는 것이 효과적일 때가 많습니다.\n\na girl... (중략)... medium shot (X - 덜 효과적)\nmedium shot of a girl... (중략) (O - 강력함!)\n\nAI에게 "이봐! 지금부터 내가 말하는 장면을 \'미디엄 샷\'으로 찍어줘!"라고 가장 먼저 지시하는 \'감독의 명령\' 역할을 하기 때문입니다!'
        },
        completion: {
            title: '🏆✨ 퀘스트 대성공! "궁극의 프롬프트" 완성! ✨🏆',
            message: '축하합니다! 여러분은 7개의 모든 퀘스트를 완료하고, 흩어져 있던 블록들을 모아 \'여러분만의 궁극의 프롬프트\' 조립에 성공했습니다!',
            choice: '저는 1~6챕터까지 만든 제 캐릭터(우비 소녀)의 감성적인 표정에 집중하고 싶어요. 그래서 <strong style="color: #ff6b6b;">\'high angle full shot\'</strong> (하이앵글 샷)을 선택할게요.\n\n그리고 꿀팁을 활용해서, \'비 오는 밤\'과 \'로파이 감성\'을 극대화하기 위해 bokeh (보케) 효과를 추가해서 뒷배경의 가로등 불빛이 예쁘게 뭉개지도록 할 거예요!',
            result: 'high angle, full shot, bokeh of a young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night, anime style, lo-fi aesthetic, glowing streetlights and warm light from shop windows --ar 16:9 --v 7',
            image: '/images/lowhigh.png',
            status: '캐릭터(Character) → 행동(Action) → 소품(Props) → 배경(Setting) → 스타일(Style) → 조명&시간(Lighting&Time) → <strong style="color: #ff6b6b;">\'카메라(Camera)\'</strong>',
            nextStep: '이제 이 완성된 프롬프트를 미드저니, 이미지FX, 픽루멘, 위스크 등 어떤 AI 툴에 넣어도, 여러분이 상상했던 \'비 오는 밤거리의 노란 우비 소녀\' 이미지를 정확하게 얻을 수 있을 것입니다.\n\n이 7-블록 조립 방식만 기억한다면, 여러분은 앞으로 어떤 이미지든 자유자재로 창조할 수 있는 \'AI 프롬프트 마스터\'가 될 수 있습니다!\n\n지금까지 튜토리얼을 따라오시느라 정말 고생 많으셨습니다! 🐝'
        },
        usage: [],
        images: []
    },


    // ============= 전문가 과정 =============
    'expert-ch1': {
        title: 'Chapter 1. AI 아트 디렉터처럼 생각하기',
        koreanTitle: '시작하며',
        prompt: '',
        description: '',
        type: 'expert',
        parts: [
            {
                title: 'AI 이미지 생성의 현실',
                content: 'AI 이미지 생성 툴이 쏟아지는 시대입니다. 누구나 몇 초 만에 이미지를 만들 수 있습니다.\n\n하지만 아무나 정확히 원하는 이미지를 만들지는 못합니다.'
            },
            {
                title: '프롬프트 룰렛 (Prompt Roulette)',
                content: '아마 당신도 이런 경험이 있을 것입니다.\n\n(Before) 당신의 프롬프트:\n"밤에 혼자 사무실에서 일하는 남자"\n\n(AI의 결과물):\n- 어딘가 어색한 구도...\n- 내가 원한 고독한 느낌이 아니라 그냥 밝은 사무실...\n- 전혀 감성적이지 않은 평범한 스톡 이미지...\n\n원하는 이미지가 나올 때까지 단어 몇 개를 바꿔가며 시도합니다.\n\n우리는 이것을 프롬프트 룰렛(Prompt Roulette)이라 부릅니다. 원하는 숫자가 나올 때까지 레버를 당기는 것과 같습니다.'
            },
            {
                title: '왜 이런 일이 발생할까요?',
                content: '대부분의 사용자가 AI에게 단순한 키워드 나열을 하고 있기 때문입니다.\n\n이는 마치 영화감독이 배우에게 "자, 알아서 연기해 봐!"라고 말하는 것과 같습니다.\n\n훌륭한 결과물은 명령이 아닌 설계에서 나옵니다.'
            },
            {
                title: '이 책은 무엇인가?',
                content: '이 책은 마법의 프롬프트 키워드를 나열한 주문서가 아닙니다.\n\n이 책은 당신의 사고방식을 AI 아트 디렉터(Art Director)로 바꾸는 훈련 가이드입니다.\n\nAI 아트 디렉터는 룰렛을 돌리지 않습니다. 그들은 청사진(Blueprint)을 그립니다.'
            },
            {
                title: 'AI 아트 디렉터의 프롬프트',
                content: '(After) 아트 디렉터의 프롬프트:\n\n"[Cinematic] 스타일로, [Low Angle Shot]으로 잡은, 텅 빈 사무실 [네온 조명]이 비치는 책상에 앉아 [고뇌하는 표정]으로 모니터를 응시하는 30대 남자, [어둡고 차가운 톤], [--ar 16:9]"\n\n(AI의 결과물):\n- 정확히 의도한 구도와 분위기\n- 스토리텔링이 담긴 한 편의 영화 스틸 컷\n\n차이가 느껴지시나요?'
            },
            {
                title: '이 책의 목표',
                content: '이 책의 목표는 명확합니다.\n\n당신이 룰렛을 멈추고 청사진을 그리도록 돕는 것입니다.\n\n우리는 이 청사진을 8요소 프레임워크(8-Element Framework)라고 부릅니다.'
            },
            {
                title: '8요소 프레임워크',
                content: '이 프레임워크는 미드저니(Midjourney) V7을 비롯한 최신 생성 AI에 최적화되어 있으며, 당신의 추상적인 아이디어를 전문가 수준의 구체적인 이미지로 변환하는 가장 확실한 공식이 될 것입니다.\n\n8가지 핵심 요소:\n1. 스타일 (Style/Mood)\n2. 파라미터 (Parameters)\n3. 주제/피사체 (Subject)\n4. 액션/포즈 (Action/Pose)\n5. 환경/배경 (Environment)\n6. 조명 (Lighting)\n7. 카메라 앵글/구도 (Angle/Composition)\n8. 색감 및 품질/효과 (Color & Quality/Effects)'
            }
        ],
        usage: [],
        images: []
    },

    'expert-ch2': {
        title: 'Chapter 2. 완벽한 프롬프트의 핵심 워크플로우',
        koreanTitle: '3단계로 청사진 그리기',
        prompt: '',
        description: '',
        type: 'expert',
        parts: [
            {
                title: '8요소 프레임워크는 체크리스트가 아닙니다',
                content: '8요소 프레임워크는 단순히 8개의 요소를 나열한 체크리스트가 아닙니다.\n\n이는 AI가 가장 잘 알아들을 수 있도록 설계된 단계별 사고 과정(Workflow)입니다.\n\n복잡한 프롬프트를 한 번에 떠올리려 하지 마세요. 단순한 질문에서 시작해 한 단계씩 살을 붙여나가는 것이 핵심입니다.'
            },
            {
                title: 'AI 아트 디렉터의 3단계 워크플로우',
                content: 'AI 아트 디렉터는 이 3단계 워크플로우로 작업합니다:\n\n1단계: [스타일]과 [비율] 먼저 정하기 (캔버스 결정)\n2단계: 5W1H로 [상세 요소] 질문하기 (디테일 설계)\n3단계: 조합 및 [최종 프롬프트] 생성하기 (청사진 완성)'
            },
            {
                title: '1단계: 스타일과 비율 먼저 정하기',
                content: '가장 먼저 할 일은 무엇을 그릴지 정하는 것이 아닙니다. 어떻게 보일지, 즉 전체적인 캔버스와 톤을 결정하는 것입니다.\n\n영화감독이 시나리오를 쓰기 전에:\n- "이건 누아르 영화야" (스타일)\n- "그리고 와이드 스크린 비율로 찍을 거야" (비율)\n\n라고 정하는 것과 같습니다.\n\n--ar 16:9의 시네마틱 샷과 --ar 1:1의 인물 샷은 완전히 다른 접근이 필요합니다.'
            },
            {
                title: '2단계: 5W1H로 상세 요소 질문하기',
                content: '캔버스가 정해졌다면, 이제 그 안을 채울 차례입니다.\n\n한 번에 하나씩, 5W1H 원칙에 따라 스스로에게 질문을 던집니다:\n\nWHO? (주제/피사체): 주인공은 누구인가?\nWHAT? (액션/포즈): 그는 무엇을 하고 있는가?\nWHERE? (환경/배경): 여긴 어디인가?\nWHEN/HOW? (조명): 지금은 몇 시이며, 빛은 어디에서 오는가?\nHOW? (카메라 앵글): 이 장면을 어떤 각도에서 보여줄 것인가?\n\n이 질문들에 답하는 과정에서 프롬프트의 뼈대가 완성됩니다.'
            },
            {
                title: '3단계: 최종 프롬프트 조합하기',
                content: '마지막으로, 1, 2단계에서 수집한 모든 설계 요소들을 AI가 이해할 수 있는 언어(주로 영어 키워드)로 조립합니다.\n\n조합 공식:\n(스타일) + (비율) + (주제) + (액션) + (배경) + (조명) + (앵글) + (품질) = 완벽한 프롬프트\n\n이 워크플로우를 따르는 순간, 당신은 더 이상 AI에게 부탁하는 사람이 아니라, AI라는 유능한 어시스턴트에게 명확한 지시를 내리는 아트 디렉터가 됩니다.'
            },
            {
                title: '다음 단계',
                content: '다음 장(Part 2)부터 이 8가지 요소를 하나씩 해부하며 청사진을 그리는 실전 훈련을 시작하겠습니다.\n\n준비되셨나요? 이제 본격적으로 AI 아트 디렉터의 세계로 들어가 봅시다!'
            }
        ],
        usage: [],
        images: []
    },

    'expert-ch3': {
        title: 'Chapter 3. 요소 1: 스타일 (Style/Mood)',
        koreanTitle: '이미지의 첫인상을 결정하는 가장 강력한 요소',
        prompt: '',
        description: 'Part 1에서 우리는 아트 디렉터의 3단계 워크플로우를 배웠습니다. 가장 첫 번째 단계는 "무엇을" 그릴지가 아니라 "어떻게" 보일지를 정하는 것이라고 했습니다.\n\nPart 2에서는 이 첫인상을 결정하는 가장 강력한 두 가지 요소, 스타일과 파라미터에 대해 알아봅니다.',
        type: 'expert-style',
        keywordType: 'style',
        intro: {
            title: '스타일은 모든 것입니다',
            content: '프롬프트 엔지니어링에서 스타일은 모든 것입니다. 스타일 키워드는 AI에게 "이 이미지는 어떤 렌즈를 통해 세상을 바라봐야 하는가?"를 알려주는 핵심 지침입니다.\n\n같은 카페에 앉아있는 남자라는 주제도, 어떤 스타일을 선택하느냐에 따라 180도 다른 결과물을 내놓습니다.'
        },
        styleExamples: [
            {
                title: 'Photorealistic',
                subtitle: '사진처럼 사실적인',
                description: 'Photorealistic을 선택하면, AI는 현실의 조명, 질감, 렌즈의 특성을 계산합니다.',
                prompt: 'Photorealistic, a man sitting in a cafe, natural afternoon light',
                result: '실제 카메라로 찍은 듯한 스냅샷. 피부의 질감, 창문으로 들어오는 자연광, 커피잔의 반사광이 현실적으로 표현됨',
                keywords: ['photorealistic', 'hyperrealistic', 'professional photography', 'natural lighting', 'realistic textures']
            },
            {
                title: 'Anime Style',
                subtitle: '애니메이션 스타일',
                description: 'Anime Style을 선택하면, AI는 현실의 물리 법칙 대신 셀 채색, 과장된 표정, 만화적 구도를 계산합니다.',
                prompt: 'Anime Style, Studio Ghibli style, a man sitting in a cafe, warm and cozy colors',
                result: '따뜻한 색감의 지브리 스튜디오 풍 작화. 부드러운 파스텔톤, 손으로 그린 듯한 배경, 감성적인 캐릭터 표현',
                keywords: ['anime style', 'Studio Ghibli', 'manga style', 'cel shading', 'kawaii']
            },
            {
                title: 'Cinematic',
                subtitle: '영화처럼',
                description: 'Cinematic을 선택하면, AI는 극적인 조명 대비, 영화적인 색 보정, 와이드한 구도를 우선적으로 고려합니다.',
                prompt: 'Cinematic, Noir Style, a man sitting in a cafe, dramatic side lighting, shadows, smoking',
                result: '1940년대 흑백 영화의 한 장면. 창문 틈으로 들어오는 한 줄기 빛(Rim light), 얼굴의 절반이 그림자에 잠겨 있으며, 고독하고 무거운 분위기',
                keywords: ['cinematic', 'film noir', 'dramatic lighting', 'chiaroscuro', 'color grading']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '스타일 키워드를 정할 때는 부록으로 제공하는 키워드 사전을 참고하세요.\n\n미술 사조: Impressionism, Surrealism, Cubism\n아티스트: by Van Gogh, by Hayao Miyazaki\n매체: Oil Painting, Watercolor, 3D Render, Pixel Art\n장르: Cyberpunk, Steampunk, Fantasy'
        },
        conclusion: {
            title: '스타일이 AI의 해석 방식을 결정합니다',
            content: '보시다시피, 스타일은 단순히 이미지를 꾸미는 요소가 아닙니다. 스타일은 AI가 이미지를 해석하는 방식 그 자체를 결정합니다.\n\n당신이 원하는 분위기가 따뜻함인지, 사실적임인지, 극적임인지를 가장 먼저 정해야 하는 이유입니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch4': {
        title: 'Chapter 4. 요소 2: 파라미터 (Parameters)',
        koreanTitle: '화면 비율이 구도를 결정한다',
        prompt: '',
        description: '스타일(톤 앤 매너)을 정했다면, 다음은 이미지가 담길 틀, 즉 캔버스의 형태를 정할 차례입니다.',
        type: 'expert-style',
        keywordType: 'parameter',
        intro: {
            title: '화면 비율의 중요성',
            content: '미드저니에서는 --ar (Aspect Ratio, 화면 비율) 파라미터로 캔버스 형태를 제어합니다.\n\n많은 초보자가 이 파라미터를 생략합니다. (기본값은 1:1 정사각형) 하지만 아트 디렉터는 화면 비율이 구도와 스토리에 얼마나 큰 영향을 미치는지 잘 알고 있습니다.'
        },
        styleExamples: [
            {
                title: '--ar 16:9',
                subtitle: '가로형 (시네마틱)',
                description: '영화, 풍경, 여러 인물이 등장하는 장면에 최적화되어 있습니다. 안정감과 광활함을 줍니다.',
                prompt: 'cinematic, a knight standing on a mountain peak, vast landscape --ar 16:9',
                result: '기사는 다소 작게 표현되더라도, 좌우로 펼쳐진 광활한 하늘과 산맥이 강조됨. 영화 반지의 제왕의 한 장면처럼 보임',
                keywords: ['--ar 16:9', '--ar 21:9', '--ar 2:1', 'cinematic wide', 'landscape']
            },
            {
                title: '--ar 1:1',
                subtitle: '정사각형 (SNS)',
                description: '인스타그램 등 SNS에 적합합니다. 시선을 중앙으로 집중시켜 인물 사진이나 오브젝트에 좋습니다.',
                prompt: 'cinematic, a knight standing on a mountain peak, vast landscape --ar 1:1',
                result: '배경과 인물이 균형 있게 배치됨. 기사의 모습에 시선이 집중되지만, 16:9만큼의 광활함은 덜함',
                keywords: ['--ar 1:1', '--ar 4:5', 'square format', 'instagram', 'centered']
            },
            {
                title: '--ar 9:16',
                subtitle: '세로형 (모바일)',
                description: '스마트폰 배경화면, 틱톡/릴스 콘텐츠에 사용됩니다. 인물의 전신을 담거나 수직적인 느낌을 강조할 때 강력합니다.',
                prompt: 'cinematic, a knight standing on a mountain peak, vast landscape --ar 9:16',
                result: '산봉우리의 높이와 기사의 웅장한 전신이 강조됨. 하늘이나 좌우 풍경보다 수직적인 위압감이 살아남',
                keywords: ['--ar 9:16', '--ar 2:3', 'vertical', 'mobile', 'portrait']
            }
        ],
        tip: {
            title: '기타 유용한 파라미터',
            content: '--v 6: 미드저니 최신 버전 사용\n--s 750: 스타일 강도 조절 (0-1000, 기본값 100)\n--style raw: 더 자연스럽고 덜 양식화된 결과물\n--chaos 50: 변화도 조절 (0-100, 높을수록 다양한 결과)'
        },
        conclusion: {
            title: '습관을 들이세요',
            content: '프롬프트를 시작할 때, [스타일]과 [--ar 비율]을 먼저 입력하는 습관을 들이세요.\n\n이 두 가지만으로도 당신의 결과물은 80% 이상 예측 가능하고 통제 가능한 범위로 들어옵니다.\n\n이제 첫인상을 결정했으니, 다음 파트(Part 3)부터는 이 캔버스 안을 채워 넣을 5W1H 요소들을 하나씩 설계해 보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch5': {
        title: 'Chapter 5. 요소 3: 주제/피사체 (Subject)',
        koreanTitle: 'WHO - 누가 주인공인가?',
        prompt: '',
        description: 'Part 2에서 우리는 스타일과 비율이라는 캔버스를 설정했습니다. 이제 아트 디렉터로서 캔버스 위에 무엇을 그릴지 구체적으로 설계할 차례입니다.\n\nPart 3에서는 5W1H 원칙을 따라 장면의 핵심 요소를 하나씩 쌓아 올립니다. 이 단계의 핵심은 한 번에 하나씩 요소를 더해가는 것입니다.',
        type: 'expert-style',
        keywordType: 'subject',
        intro: {
            title: '주인공을 캐스팅하세요',
            content: '모든 훌륭한 이미지에는 주인공이 있습니다. 5W1H의 첫 번째 질문인 WHO? (누가?)는 이미지의 시선이 머무를 단 하나의 닻(Anchor)을 설정하는 과정입니다.\n\nAI에게 "사람"이나 "개"라고 말하는 것은, 배우에게 "그냥 사람처럼 연기해"라고 말하는 것과 같습니다. AI는 누구를 캐스팅해야 할지 몰라 가장 평균적인(generic) 이미지를 가져올 것입니다.\n\n아트 디렉터는 캐스팅 디렉터가 되어야 합니다. 어떤 사람인지, 어떤 동물인지, 어떤 사물인지 구체적으로 명시해야 합니다.'
        },
        styleExamples: [
            {
                title: '모호한 캐스팅',
                subtitle: 'Bad Prompt',
                description: '특징 없는 평균적인 이미지가 생성됩니다.',
                prompt: 'cinematic, a man standing --ar 16:9',
                result: '특징 없는 평균적인 남자가 밋밋하게 서 있음. 나이, 직업, 스타일을 알 수 없는 스톡 이미지',
                keywords: ['a man', 'a woman', 'a person', 'generic', 'average']
            },
            {
                title: '구체적인 인물 캐스팅',
                subtitle: 'Good Prompt',
                description: '나이, 특징, 의상까지 구체적으로 명시하면 캐릭터의 역사가 느껴집니다.',
                prompt: 'cinematic, a 60-year-old grizzled warrior, deep scar over one eye, wearing heavy iron armor, fantasy style --ar 16:9',
                result: '얼굴의 주름, 흉터의 질감, 갑옷의 반사광까지 캐릭터의 역사가 느껴지는 구체적인 인물이 생성됨',
                keywords: ['60-year-old warrior', 'young woman', 'elderly man', 'teenage girl', 'grizzled veteran']
            },
            {
                title: '사물 캐스팅',
                subtitle: 'Good Prompt',
                description: '사물도 주인공이 될 수 있습니다. 구체적인 특징을 부여하세요.',
                prompt: 'cinematic, an ancient magical book, glowing runes on the leather cover, sitting on a stone pedestal --ar 1:1',
                result: '책의 가죽 질감, 룬 문자의 빛 효과, 받침대의 거친 표면 등 주인공으로서의 존재감이 명확한 사물이 생성됨',
                keywords: ['ancient book', 'vintage camera', 'magical sword', 'glowing crystal', 'rusty robot']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '주제/피사체를 설계할 때는 다음 요소들을 조합해 보세요. (전부 다 쓸 필요는 없지만, 구체적일수록 좋습니다.)\n\n핵심 정체성: man, woman, dragon, robot, tree\n수식어 (외형): young, old, tall, glowing, rusty\n패션/의상: wearing a 1980s retro jacket, in a victorian dress\n얼굴/특징: with a sharp jawline, blue eyes, long beard\n액세서리: holding a vintage camera, with cyberpunk goggles\n\n부록의 주제/피사체 키워드 사전을 참고하여 당신의 주인공을 구체화해 보세요.'
        },
        conclusion: {
            title: '다음 단계',
            content: '자, 이제 주인공 캐스팅이 끝났습니다. 그렇다면 이 주인공이 캔버스 위에서 "무엇을 하고 있나요? (WHAT?)"\n\n다음 챕터에서는 장면에 생동감을 불어넣는 [액션/포즈]에 대해 알아보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch6': {
        title: 'Chapter 6. 요소 4: 액션/포즈 (Action/Pose)',
        koreanTitle: 'WHAT - 무엇을 하고 있는가?',
        prompt: '',
        description: 'Chapter 5에서 우리는 누가(WHO) 주인공인지 명확하게 캐스팅했습니다. 하지만 훌륭하게 캐스팅된 주인공이라도 캔버스 위에 그냥 서 있기만 한다면, 그건 살아있는 캐릭터가 아니라 마네킹이나 다름없습니다.\n\n장면에 생명력을 불어넣는 두 번째 질문은 WHAT? (무엇을 하고 있는가?)입니다.',
        type: 'expert-style',
        keywordType: 'action',
        intro: {
            title: '스토리를 만드는 액션과 포즈',
            content: '[액션/포즈]는 당신의 주인공이 어떤 상태에 있는지, 어떤 이야기의 한가운데에 있는지를 AI에게 알려주는 핵심 연기 디렉션입니다.\n\n서 있는 전사는 단순한 설명입니다. 검을 높이 들고 함성을 지르며 달려가는 전사는 스토리입니다.\n\n액션이 꼭 달리기나 점프처럼 커다란 움직임일 필요는 없습니다. 포즈, 표정, 시선의 미묘한 조합이 때로는 더 많은 이야기를 전달합니다.'
        },
        styleExamples: [
            {
                title: '액션이 없는 캐스팅',
                subtitle: 'Bad Prompt',
                description: '어떤 상황인지 알 수 없는 증명사진처럼 보입니다.',
                prompt: 'cinematic, a detective in a trench coat --ar 16:9',
                result: '탐정이 밋밋하게 서 있거나 정면을 보고 있음. 어떤 상황인지 알 수 없는 증명사진이나 카탈로그 샷처럼 보임',
                keywords: ['standing', 'sitting', 'looking at camera', 'neutral pose', 'static']
            },
            {
                title: '동적인 액션',
                subtitle: 'Good Prompt - Dynamic',
                description: '역동적인 움직임으로 추격전이라는 스토리가 명확해집니다.',
                prompt: 'cinematic, a detective in a trench coat, running down a dark alleyway, holding a revolver, determined expression --ar 16:9',
                result: '역동적인 달리기 자세, 흔들리는 코트 자락, 긴박한 표정 등 추격전이라는 스토리가 명확하게 담긴 장면이 생성됨',
                keywords: ['running', 'jumping', 'fighting', 'chasing', 'flying through air']
            },
            {
                title: '정적인 포즈와 감정',
                subtitle: 'Good Prompt - Static',
                description: '큰 움직임 없이도 고뇌와 잠복이라는 스토리가 느껴집니다.',
                prompt: 'cinematic, a detective in a trench coat, leaning against a brick wall, arms crossed, looking away pensively, face half in shadow --ar 16:9',
                result: '큰 움직임은 없지만 고뇌와 잠복이라는 스토리가 느껴짐. 팔짱 낀 자세, 시선 처리, 그림자를 통해 캐릭터의 복잡한 심리가 드러남',
                keywords: ['leaning against wall', 'arms crossed', 'looking away', 'sitting pensively', 'eyes closed']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '액션/포즈를 지시할 때는 다음 요소들을 조합해 보세요. AI는 이 디테일한 연기 지시를 기가 막히게 알아듣습니다.\n\n동작 (Action): running, jumping, fighting, walking, dancing\n자세 (Pose): standing confidently, sitting cross-legged, leaning against\n감정/표정 (Emotion): laughing, crying, frowning, surprised expression\n시선 (Gaze): looking directly at camera, looking away, eyes closed'
        },
        conclusion: {
            title: '다음 단계',
            content: '주인공(WHO)이 정해지고, 그가 무엇을 하는지(WHAT)가 정해졌습니다. 이제 아트 디렉터로서 가장 흥미로운 질문이 남았습니다.\n\n"그래서 여긴 어디인가? (WHERE?)"\n\n다음 챕터에서는 이 모든 이야기가 펼쳐질 무대, [환경/배경]을 설계해 보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch7': {
        title: 'Chapter 7. 요소 5: 환경/배경 (Environment)',
        koreanTitle: 'WHERE - 여기가 어디인가?',
        prompt: '',
        description: '지금까지 우리는 주인공을 캐스팅(WHO)하고, 그에게 생동감 넘치는 연기(WHAT)를 지시했습니다. 하지만 배우가 하얀 방(White Room)에서 연기한다면 어떨까요? 아무리 훌륭한 연기도 스토리가 완성되지 않습니다.\n\n세 번째 질문, WHERE? (여기가 어디인가?)는 당신의 이야기를 완성하는 무대(Stage)를 설치하는 작업입니다.',
        type: 'expert-style',
        keywordType: 'environment',
        intro: {
            title: '무대를 설치하세요',
            content: '[환경/배경]은 단순히 뒤에 깔리는 배경화면이 아닙니다. 이것은 주인공의 맥락(Context)을 설명하고, 장면의 분위기(Mood)를 지배하며, 때로는 그 자체로 또 다른 주인공이 됩니다.\n\n폭우 속의 탐정과 맑은 날의 탐정은 완전히 다른 이야기를 품고 있습니다. 성 안의 전사와 늪지대의 전사는 처한 상황이 다릅니다.\n\n당신은 이제 아트 디렉터이자, 이 장면의 무대 디자이너(Set Designer)입니다.'
        },
        styleExamples: [
            {
                title: '무대가 없는 배우',
                subtitle: 'Bad Prompt',
                description: '배경이 없으면 스토리도 없습니다.',
                prompt: 'cinematic, a wizard casting a spell --ar 16:9',
                result: '흰색이나 단색 배경, 혹은 AI가 임의로 생성한 의미 없는 배경 앞에 마법사가 덩그러니 서 있음. 스토리가 전혀 없음',
                keywords: ['no background', 'white background', 'simple background', 'plain', 'empty']
            },
            {
                title: '신비로운 무대',
                subtitle: 'Good Prompt - Mystery',
                description: '고대 도서관이라는 무대가 지식과 신비로움을 전달합니다.',
                prompt: 'cinematic, a wizard casting a spell, inside an ancient library, tall bookshelves reaching the ceiling, dust particles floating in the air, a single shaft of moonlight --ar 16:9',
                result: '지식, 비밀, 신비로움이라는 키워드가 느껴지는 장면. 마법사는 아마도 고대의 주문을 연구 중일 것임',
                keywords: ['in ancient library', 'in mystical cave', 'in wizard tower', 'surrounded by books', 'in secret chamber']
            },
            {
                title: '긴박한 무대',
                subtitle: 'Good Prompt - Tension',
                description: '폭풍우 치는 산봉우리가 전투와 위험을 암시합니다.',
                prompt: 'cinematic, a wizard casting a spell, on a stormy mountain peak, dark storm clouds swirling, rain lashing down, defensive magic shield glowing --ar 16:9',
                result: '전투, 위험, 방어라는 키워드가 느껴지는 장면. 마법사는 무언가와 싸우고 있거나 위험한 의식을 치르는 중일 것임',
                keywords: ['on mountain peak', 'in stormy battlefield', 'in dark forest', 'on cliff edge', 'in ruins']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '환경/배경을 설계할 때는 다음 요소들을 조합해 보세요. 이 요소들은 서로 강력하게 상호작용합니다.\n\n장소 (Location): in a space station, on a tropical beach, in a medieval castle hall\n장소 묘사: cluttered with gadgets, with pristine white sand, decorated with royal banners\n날씨 (Weather): sunny, rainy, foggy, snowstorm, thunder and lightning\n\n환경을 묘사할 때는 단순히 어디인지만 말하지 마세요. 그곳의 상태를 함께 묘사해야 합니다.\n\n그냥 city (X) → a neon-lit cyberpunk city, wet reflective streets (O)\n그냥 forest (X) → a dark, foggy forest, tall pine trees, spooky mood (O)'
        },
        conclusion: {
            title: '다음 단계',
            content: '자, 이제 훌륭한 무대(WHERE)가 완성되었습니다. 배우(WHO)도 그 위에서 연기(WHAT)를 하고 있습니다. 이제 이 무대에 조명 감독이 들어올 차례입니다.\n\n"지금은 몇 시이며, 빛은 어디에서 오는가? (WHEN/HOW?)"\n\n다음 챕터에서는 장면의 분위기를 완성하는 마지막 한 방, [조명]에 대해 알아보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch8': {
        title: 'Chapter 8. 요소 6: 조명 (Lighting)',
        koreanTitle: 'WHEN/HOW - 빛이 감정을 만든다',
        prompt: '',
        description: '우리는 배우(WHO), 연기(WHAT), 그리고 무대(WHERE)까지 완벽하게 준비했습니다. 하지만 이 모든 것이 보이게 하려면, 그리고 더 나아가 느껴지게 하려면, 이 장면의 가장 감성적인 요소인 [빛]이 필요합니다.\n\n조명은 단순히 사물을 밝히는 기능이 아닙니다. 조명은 그 자체로 분위기(Mood)이자 스토리입니다.',
        type: 'expert-style',
        keywordType: 'lighting',
        intro: {
            title: '조명 감독이 되세요',
            content: 'WHEN (시간대)은 Golden Hour(골든 아워)의 따뜻함인지, Midday Sun(한낮)의 쨍함인지, Blue Hour(블루 아워)의 차가움인지를 결정합니다.\n\nHOW (방식/기법)는 Soft lighting(부드러운 빛)의 평온함인지, Hard lighting(강한 빛)의 긴장감인지, Rim lighting(윤곽선 빛)의 극적인 효과인지를 결정합니다.\n\n어둠 속에 숨겨진 것은 무엇인지, 빛이 강조하는 것은 무엇인지를 통해 관객의 감정을 조종합니다.'
        },
        styleExamples: [
            {
                title: '조명이 모호할 때',
                subtitle: 'Bad Prompt',
                description: '시간대나 감정을 알 수 없는 평범한 조명입니다.',
                prompt: 'cinematic, a woman sitting by a window --ar 16:9',
                result: '특징 없는 평범한 조명. 시간대나 감정을 알 수 없는, 가장 평균적인 실내 조명',
                keywords: ['normal lighting', 'default light', 'ambient light', 'flat lighting', 'no specific lighting']
            },
            {
                title: '따뜻한 자연광',
                subtitle: 'Good Prompt - WHEN',
                description: '골든 아워의 따뜻한 빛이 평화로운 분위기를 만듭니다.',
                prompt: 'cinematic, a woman sitting by a window, soft golden hour light streaming in, warm tones, peaceful mood --ar 16:9',
                result: '오후, 휴식, 따뜻함, 향수 등의 감정이 느껴짐. 부드러운 그림자와 따뜻한 색감이 장면을 지배함',
                keywords: ['golden hour', 'soft sunlight', 'warm natural light', 'sunset glow', 'morning light']
            },
            {
                title: '차가운 인공광',
                subtitle: 'Good Prompt - HOW',
                description: '네온사인의 차가운 빛이 도시의 고독을 표현합니다.',
                prompt: 'cinematic, a woman sitting by a window, lit only by the blue and pink neon signs outside, dark moody shadows, reflective light on her face --ar 16:9',
                result: '밤, 도시, 고독, 미스터리 등의 감정이 느껴짐. 차가운 색감과 강한 명암 대비가 장면을 지배함',
                keywords: ['neon lights', 'blue hour', 'moonlight', 'candlelight', 'street lights']
            },
            {
                title: '극적인 조명 기법',
                subtitle: 'Good Prompt - Dramatic',
                description: '림 라이트가 실루엣을 만들어 극적인 효과를 냅니다.',
                prompt: 'cinematic, a woman sitting by a window, dramatic rim lighting from behind, silhouette, her face is hidden in shadows, only her outline is visible --ar 16:9',
                result: '익명성, 비밀, 드라마 등의 감정이 느껴짐. 인물의 정체성보다 형태와 분위기를 강조하는 극적인 샷',
                keywords: ['rim lighting', 'back lighting', 'hard shadows', 'chiaroscuro', 'volumetric lighting']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '조명을 설계할 때는 부록의 조명 키워드 사전에서 원하는 무기를 골라보세요.\n\n자연광 (WHEN): Sunrise, Midday harsh sunlight, Golden Hour, Blue Hour, Moonlight\n인공광 (HOW): Neon lights, Candlelight, Studio lights, Street lights, Volumetric lighting\n조명 기법 (HOW): Soft lighting, Hard dramatic shadows, Back lighting, Rim lighting, Chiaroscuro'
        },
        conclusion: {
            title: '다음 단계',
            content: '이제 완벽한 무대(WHERE)에, 완벽한 조명(WHEN/HOW)이 설치되었습니다. 배우(WHO)는 연기(WHAT)를 하고 있습니다.\n\n자, 이제 당신은 촬영 감독이 되어 마지막 결정을 내려야 합니다.\n\n"이 완벽한 장면을 어떤 각도에서 찍을 것인가? (HOW?)"\n\n다음 챕터에서는 장면에 의도를 담는 [카메라 앵글/구도]에 대해 알아보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch9': {
        title: 'Chapter 9. 요소 7: 카메라 앵글/구도 (Camera)',
        koreanTitle: 'HOW - 관점을 설계하다',
        prompt: '',
        description: '우리는 무엇을 볼지 결정했습니다. 이제 아홉 번째 질문, "시청자는 그것을 어떻게 바라보는가?"입니다.\n\n관객이 장면을 인식하는 방식을 결정하는 것, 그것이 바로 카메라 앵글과 구도입니다. 카메라는 관객의 눈입니다.',
        type: 'expert-style',
        keywordType: 'camera',
        intro: {
            title: '카메라는 감정의 언어입니다',
            content: '카메라는 단순히 장면을 비추는 도구가 아니라, 감독이 관객에게 말을 거는 어조(Tone)입니다.\n\n카메라의 높낮이는 캐릭터와 관객 사이의 심리적 관계를 즉각적으로 설정합니다. 구도는 프레임 안에 요소들을 어떻게 배치할 것인가에 대한 계획입니다.\n\n카메라 앵글과 구도는 감독이 관객에게 "이것을 이런 관점으로 봐라"라고 지시하는 가장 강력한 시각적 언어입니다.'
        },
        styleExamples: [
            {
                title: 'Eye-Level (아이 레벨)',
                subtitle: '중립적 시선',
                description: '가장 중립적이고 현실적인 시선입니다. 관객은 피사체와 동등한 입장에서 감정적으로 연결됩니다.',
                prompt: 'cinematic, eye-level medium shot of a woman talking, natural perspective --ar 16:9',
                result: '일상적인 대화 장면처럼 편안하고 자연스러운 느낌. 관객과 캐릭터가 동등한 위치',
                keywords: ['eye-level shot', 'medium shot', 'close-up', 'wide shot', 'full body shot']
            },
            {
                title: 'Low Angle (로우 앵글)',
                subtitle: '권력과 위압감',
                description: '피사체를 강하고, 위압적이며, 중요하게 만듭니다. 영웅이나 악당의 힘을 시각적으로 증폭시킵니다.',
                prompt: 'cinematic, low-angle shot of a towering superhero, looking down at camera, powerful stance --ar 16:9',
                result: '피사체가 거대하고 강력해 보임. 관객이 올려다보는 느낌으로 경외감을 줌',
                keywords: ['low angle', 'worm\'s eye view', 'looking up', 'heroic angle', 'dramatic low shot']
            },
            {
                title: 'High Angle (하이 앵글)',
                subtitle: '취약함과 고립',
                description: '피사체를 약하고, 고립되었으며, 취약하게 만듭니다. 곤경에 처한 주인공의 무력감을 표현합니다.',
                prompt: 'cinematic, high-angle shot of a lost child in a crowd, looking small and vulnerable --ar 16:9',
                result: '피사체가 작고 약해 보임. 관객이 내려다보는 느낌으로 연민이나 우월감을 줌',
                keywords: ['high angle', 'bird\'s eye view', 'overhead shot', 'looking down', 'top-down view']
            },
            {
                title: 'Dutch Angle (더치 앵글)',
                subtitle: '불안과 혼란',
                description: '카메라를 의도적으로 기울여 불안, 긴장, 혼란, 광기를 유발합니다.',
                prompt: 'cinematic, dutch angle shot of a chaotic street fight, tilted camera, disorienting perspective --ar 16:9',
                result: '안정적인 구도를 깨뜨려 관객을 심리적으로 불편하게 만듦. 긴장감과 혼란 표현',
                keywords: ['dutch angle', 'tilted shot', 'canted angle', 'diagonal composition', 'unstable frame']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '카메라 앵글과 구도 키워드:\n\n앵글: Eye-level, Low angle, High angle, Dutch angle, Bird\'s eye view\n샷 크기: Extreme close-up, Close-up, Medium shot, Full shot, Wide shot\n구도: Rule of thirds, Center composition, Leading lines, Symmetrical, Frame within frame\n\nAI에게 이미지를 생성시킬 때, 단순히 무엇을 그려달라고 하는 것과 로우 앵글로 그려달라고 하는 것은 완전히 다른 결과물을 만듭니다. 전자는 정보를 그리지만, 후자는 감정과 의도를 그립니다.'
        },
        conclusion: {
            title: '다음 단계',
            content: '이제 완벽한 카메라 앵글과 구도까지 설정했습니다. 하지만 이 모든 것이 합쳐져도 이미지가 밋밋하거나 흐릿하다면, 관객의 시선을 사로잡을 수 없습니다.\n\n다음 챕터에서는 이미지의 첫인상과 신뢰도를 결정하는 마지막 마감재, [색감 및 품질]에 대해 알아보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch10': {
        title: 'Chapter 10. 요소 8: 색감 및 품질/효과 (Color & Quality)',
        koreanTitle: 'HOW - 마지막 마감재',
        prompt: '',
        description: '지금까지 우리는 7가지 요소를 통해 장면의 뼈대와 형태를 완성했습니다. 하지만 이 모든 것이 합쳐져도 이미지가 밋밋하거나 흐릿하다면, 관객의 시선을 사로잡을 수 없습니다.\n\n이제 여덟 번째 마지막 요소, "이 장면을 어떤 톤으로 채색하고, 얼마나 선명하게 완성할 것인가?"입니다.',
        type: 'expert-style',
        keywordType: 'quality',
        intro: {
            title: '색감과 품질은 첫인상을 결정합니다',
            content: '색감(Color Tones)과 품질(Quality)은 이미지의 첫인상과 신뢰도를 결정하는 강력한 마감재입니다.\n\n색상의 온도(Warm vs Cool), 채도(Vibrant vs Muted), 그리고 해상도와 디테일이 이미지를 작품과 낙서로 가르는 기준이 됩니다.\n\nAI 아트 디렉터는 이 마지막 10%의 마감을 절대 소홀히 하지 않습니다.'
        },
        styleExamples: [
            {
                title: 'Warm Tones (따뜻한 톤)',
                subtitle: '편안함과 향수',
                description: '노란색, 주황색, 붉은색 기운이 편안함, 행복, 에너지, 향수를 표현합니다.',
                prompt: 'cinematic, a cozy cafe interior, warm color palette, golden tones, inviting atmosphere, 8K, highly detailed --ar 16:9',
                result: '따뜻하고 편안한 느낌. 골든아워 조명과 잘 어울리며 빈티지하고 감성적인 분위기',
                keywords: ['warm tones', 'golden palette', 'orange hues', 'cozy colors', 'vintage warm']
            },
            {
                title: 'Cool Tones (차가운 톤)',
                subtitle: '신비감과 미래',
                description: '파란색, 녹색, 보라색 기운이 차분함, 신비감, 슬픔, 미래적인 느낌을 표현합니다.',
                prompt: 'cinematic, a futuristic city at night, cool toned moody lighting, blue and purple hues, cyberpunk atmosphere, 8K, ultra detailed --ar 16:9',
                result: '차갑고 신비로운 느낌. 야간이나 안개 낀 장면에 효과적이며 SF적인 분위기',
                keywords: ['cool tones', 'blue palette', 'cold colors', 'moody blues', 'cyberpunk colors']
            },
            {
                title: 'Vibrant Colors (선명한 색상)',
                subtitle: '활기와 강렬함',
                description: '색이 밝고 쨍합니다. 활기, 기쁨, 판타지, 강렬함을 전달합니다.',
                prompt: 'cinematic, a magical fantasy forest, vibrant and colorful, saturated colors, vivid hues, dreamlike, 8K, insane details --ar 16:9',
                result: '시선을 즉각적으로 사로잡는 강렬한 색감. 판타지와 동화 같은 분위기',
                keywords: ['vibrant colors', 'saturated', 'vivid', 'bright colors', 'colorful']
            },
            {
                title: 'High Quality (최고 품질)',
                subtitle: '전문가급 마감',
                description: '해상도와 디테일을 극대화하여 전문가 수준의 완성도를 만듭니다.',
                prompt: 'cinematic, a portrait of a warrior, 8K resolution, ultra realistic, hyper detailed, sharp focus, professionally shot, award-winning photography --ar 16:9',
                result: '피부의 질감, 옷의 재봉선, 배경의 작은 소품까지 살아나는 현실감과 완성도',
                keywords: ['8K', 'ultra realistic', 'hyper detailed', 'sharp focus', 'professionally shot']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '색감과 품질 키워드:\n\n색상 온도: Warm tones, Cool tones, Neutral tones\n색상 채도: Vibrant colors, Muted colors, Desaturated, Pastel colors\n특수 색감: Monochromatic, Black and white, Sepia tone\n품질: 8K, Ultra realistic, Hyper detailed, Sharp focus, Insane details\n전문가급: Professionally shot, Award-winning photography, Cinematic quality\n\n7가지 요소로 아무리 완벽한 장면을 설계했더라도, 마무리가 부족하면 습작처럼 보입니다. 색감은 당신의 의도된 분위기를 장면에 코팅하는 작업이며, 품질 키워드는 그 코팅을 매끄럽고 선명하게 다듬는 폴리싱 작업입니다.'
        },
        conclusion: {
            title: '8요소 프레임워크 완성',
            content: '축하합니다! 이제 당신은 8요소 프레임워크의 모든 요소를 마스터했습니다.\n\n1. 스타일 (Style) - 어떤 느낌인가?\n2. 파라미터 (Parameters) - 어떤 비율인가?\n3. 주제/피사체 (Subject) - 누가 주인공인가?\n4. 액션/포즈 (Action) - 무엇을 하고 있는가?\n5. 환경/배경 (Environment) - 어디인가?\n6. 조명 (Lighting) - 언제, 어떤 빛인가?\n7. 카메라 앵글 (Camera) - 어떤 각도인가?\n8. 색감/품질 (Color/Quality) - 어떤 마감인가?\n\n다음 챕터에서는 이 모든 요소를 조합하는 방법을 배워보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch11': {
        title: 'Chapter 11. 최종 조합: 프롬프트 조립하기',
        koreanTitle: '8요소를 하나로 묶는 황금 순서',
        prompt: '',
        description: '지금까지 우리는 8개의 강력한 시각적 무기(요소)를 각각 배웠습니다. 하지만 이 무기들을 그저 바닥에 늘어놓는다고 해서 전투에서 승리할 수는 없습니다.\n\n이 요소들을 어떤 순서로, 어떻게 결합하느냐에 따라 AI는 당신을 명확한 지시를 내리는 감독으로 인식할 수도, 혹은 횡설수설하는 초보자로 인식할 수도 있습니다.',
        type: 'expert',
        parts: [
            {
                title: '행동 원칙 1: AI는 영어로 생각한다',
                content: '가장 중요하고 기본적인 원칙입니다. 미드저니를 포함한 대부분의 S급 이미지 AI 모델은 방대한 영어 데이터를 기반으로 학습되었습니다.\n\n물론 한국어를 입력해도 AI가 번역해서 이해하려 노력하지만, 그 과정에서 우리가 의도한 시각적 뉘앙스가 손실됩니다.\n\nAI 아트 디렉터의 공식 언어는 영어입니다. 우리가 배운 8요소의 키워드들은 모두 영어로 조합되어야 그 힘을 100% 발휘합니다.'
            },
            {
                title: '행동 원칙 2: 코드 블록으로 프롬프트를 분리하라',
                content: '우리가 프롬프트를 작성하고 관리할 때, 프롬프트 자체를 명확하게 구분하는 습관은 매우 중요합니다.\n\n가장 좋은 방법은 프롬프트를 코드 블록으로 감싸는 것입니다. 이 간단한 습관은 프롬프트의 시작과 끝을 명확히 하여, 나중에 수정하거나 다른 사람과 공유할 때 혼란을 막아줍니다.'
            },
            {
                title: '프롬프트 조립의 황금 순서',
                content: 'AI는 당신이 가장 먼저 말한 것을 가장 중요하게 받아들입니다.\n\n따라서 우리는 가장 중요한 것부터 순서대로 배치하는 전략을 사용합니다:\n\n[1단계: 무대 설정]\n[스타일 + 파라미터]: 전체 톤 앤 매너와 화면 비율을 가장 먼저 선언\n\n[2단계: 주인공 배치]\n[주제 + 액션/포즈]: 무대 위에 누가 무엇을 하는지 명확히 올림\n\n[3단계: 연출]\n[환경 + 조명 + 앵글]: 주인공을 둘러싼 배경과 빛, 그리고 시점을 지시\n\n[4단계: 후반 작업]\n[색감 + 품질]: 마지막으로 색감과 품질 키워드로 이미지를 다듬음'
            },
            {
                title: 'Before vs After: 조립의 힘',
                content: 'Before (나쁜 예: 단순 나열):\nman, cigarette, rain, street, 8K, neon, detective, 16:9, cinematic, low-angle\n\nAI는 무엇을 메인으로 잡아야 할지 혼란스러워하며, 비나 네온이 주제가 된 엉뚱한 이미지를 생성할 수 있습니다.\n\nAfter (좋은 예: 아트 디렉터의 프롬프트):\nCinematic, photorealistic, a grizzled detective lighting a cigarette, on a rain-slicked neon-lit street, dramatic rim lighting from a streetlamp, low-angle shot, cool tones, ultra-detailed, 8K --ar 16:9 --v 7\n\nAI는 이 프롬프트를 시네마틱한 사진으로, 탐정을 주인공으로 하여, 비 오는 네온 거리를 배경으로, 로우 앵글로 찍으라는 명확한 작업 지시서로 이해합니다.'
            }
        ],
        usage: [],
        images: []
    },

    'expert-ch12': {
        title: 'Chapter 12. 실전 워크샵: Case Study',
        koreanTitle: '시나리오로 프롬프트 만들기',
        prompt: '',
        description: '지금까지 우리는 8가지 요소를 이론적으로 배우고, 그것을 조립하는 방법까지 익혔습니다. 이론은 완벽합니다.\n\n이제 AI 아트 디렉터의 사고방식으로, 머릿속에만 있던 모호한 아이디어를 전문가급 이미지로 변환하는 실제 과정을 낱낱이 보여드리겠습니다.',
        type: 'expert',
        parts: [
            {
                title: '사례 1: 비 오는 밤, 네온사인 골목의 탐정',
                content: 'Before (나쁜 예):\na detective in a neon alley on a rainy night\n\n예상 문제: 키워드 수프 상태입니다. AI는 탐정, 골목, 비, 네온사인 중 무엇이 중요한지 모릅니다. 탐정이 작게 나오거나, 엉뚱한 스타일이 나올 수 있습니다. 감정이나 의도가 없습니다.'
            },
            {
                title: '8요소 프레임워크 적용 과정',
                content: '1단계: 스타일과 파라미터\n- 필름 느와르와 사이버펑크의 느낌\n- Cinematic, Photorealistic, Noir style, Moody\n- --ar 16:9\n\n2단계: 주제와 액션\n- a grizzled detective, wearing a classic trench coat and fedora\n- thoughtfully smoking a cigarette, smoke curling in the air\n\n3단계: 환경과 조명과 앵글\n- in a narrow, dark alley, rain-slicked pavement\n- reflections of bright neon signs (red and blue)\n- Dramatic rim lighting, high contrast, deep shadows\n- Slightly low-angle shot, Medium shot\n\n4단계: 색감과 품질\n- Cool tones, Ultra detailed, 8K, sharp focus on the detective\'s face'
            },
            {
                title: '최종 완성 프롬프트',
                content: 'After (좋은 예):\n\nCinematic, photorealistic, Noir style, a grizzled detective in a trench coat and fedora, thoughtfully smoking a cigarette, in a narrow dark alley, rain-slicked pavement with reflections of bright red and blue neon signs, dramatic rim lighting, high contrast, slightly low-angle medium shot, cool tones, ultra detailed, 8K --ar 16:9 --v 7\n\n결과: Before 프롬프트는 AI에게 묘사를 던졌습니다. After 프롬프트는 AI에게 감독의 지시서를 전달했습니다.'
            },
            {
                title: '사례 2: 마법 도서관의 현자',
                content: 'Before (나쁜 예):\na wise sage in a magic library\n\n예상 문제: 너무 일반적입니다. AI는 간달프나 덤블도어의 아류작을, 배경은 호그와트의 아류작을 생성할 확률이 99%입니다. 독창성이 없습니다.'
            },
            {
                title: '8요소 프레임워크 적용 과정 2',
                content: '1단계: 스타일과 파라미터\n- Digital painting, Fantasy art, Epic, Mystical mood\n- --ar 1:1\n\n2단계: 주제와 액션\n- an ancient wise sage, long white beard\n- wearing intricate blue and gold robes\n- reading a giant, ancient glowing book\n- one hand raised, casting a small magic orb of light\n\n3단계: 환경과 조명과 앵글\n- a vast, grand library, floor-to-ceiling bookshelves\n- floating books, a large stained-glass window in the background\n- Magical glow from the book illuminating his face\n- Close-up shot, eye-level\n\n4단계: 색감과 품질\n- Deep blues and rich golds, Warm tones\n- Highly detailed, intricate details'
            },
            {
                title: '최종 완성 프롬프트 2',
                content: 'After (좋은 예):\n\nDigital painting, fantasy art, mystical mood, a close-up shot of an ancient wise sage with a long white beard, wearing intricate blue and gold robes, reading a giant ancient glowing book, one hand casting a small magic orb of light, in a vast library with floating books, magical glow from the book illuminating his face, warm tones, highly detailed --ar 1:1 --v 7\n\n결과: Before는 아이디어를 검색했습니다. After는 이야기를 주문했습니다. 빛이 어디서 오는지, 현자가 무엇을 하는지 등을 명확히 지시함으로써, AI는 훨씬 더 역동적이고 독창적인 작품을 만들어냅니다.'
            }
        ],
        usage: [],
        images: []
    },

    'expert-ch13': {
        title: 'Chapter 13. AI 아트 디렉터의 키워드 사전',
        koreanTitle: 'Ver 2.0 - 실전 키워드 무기고',
        prompt: '',
        description: '지금까지 8가지 요소를 열심히 배웠으니, 이제 실전에서 바로 써먹을 수 있는 키워드 무기고를 장착할 시간입니다!\n\n이 챕터는 여러분이 프롬프트를 만들 때 바로바로 찾아볼 수 있는 AI 아트 디렉터의 비밀노트입니다.\n\n아래에서 원하는 키워드를 선택하면 자동으로 프롬프트가 조합됩니다.',
        type: 'expert-dictionary',
        keywordCategories: [
            {
                title: '요소 1: 스타일',
                categories: [
                    {
                        name: '사진 기반',
                        keywords: [
                            { en: 'Photorealistic', ko: '사진처럼 사실적인' },
                            { en: 'Cinematic', ko: '영화 같은' },
                            { en: 'Documentary', ko: '다큐멘터리' },
                            { en: 'Portrait', ko: '인물 사진' },
                            { en: 'Landscape', ko: '풍경 사진' },
                            { en: 'Vintage', ko: '빈티지' },
                            { en: 'Lo-Fi', ko: '로파이' },
                            { en: 'Noir', ko: '느와르' }
                        ]
                    },
                    {
                        name: '일러스트 & 아트',
                        keywords: [
                            { en: 'Digital Painting', ko: '디지털 페인팅' },
                            { en: 'Concept Art', ko: '컨셉 아트' },
                            { en: 'Anime', ko: '애니메이션' },
                            { en: 'Manga', ko: '만화' },
                            { en: 'Cartoon', ko: '카툰' },
                            { en: 'Fantasy Illustration', ko: '판타지 일러스트' }
                        ]
                    },
                    {
                        name: '분위기',
                        keywords: [
                            { en: 'Moody', ko: '분위기 있는' },
                            { en: 'Mystical', ko: '신비로운' },
                            { en: 'Dreamy', ko: '꿈꾸는 듯한' },
                            { en: 'Epic', ko: '웅장한' },
                            { en: 'Cozy', ko: '아늑한' }
                        ]
                    }
                ]
            },
            {
                title: '요소 2: 파라미터',
                categories: [
                    {
                        name: '화면 비율',
                        keywords: [
                            { en: '--ar 1:1', ko: '정사각형' },
                            { en: '--ar 16:9', ko: '가로 와이드' },
                            { en: '--ar 9:16', ko: '세로' },
                            { en: '--ar 4:3', ko: '표준' },
                            { en: '--ar 21:9', ko: '시네마스코프' }
                        ]
                    },
                    {
                        name: '기타 파라미터',
                        keywords: [
                            { en: '--v 6', ko: '버전 6' },
                            { en: '--style raw', ko: '자연스러운 스타일' },
                            { en: '--s 750', ko: '스타일 강도' }
                        ]
                    }
                ]
            },
            {
                title: '요소 3: 주제/피사체',
                categories: [
                    {
                        name: '인물',
                        keywords: [
                            { en: 'a man', ko: '남자' },
                            { en: 'a woman', ko: '여자' },
                            { en: 'a child', ko: '아이' },
                            { en: 'a detective', ko: '탐정' },
                            { en: 'a knight', ko: '기사' },
                            { en: 'a wizard', ko: '마법사' }
                        ]
                    },
                    {
                        name: '동물',
                        keywords: [
                            { en: 'a cat', ko: '고양이' },
                            { en: 'a dog', ko: '개' },
                            { en: 'a dragon', ko: '용' },
                            { en: 'a butterfly', ko: '나비' }
                        ]
                    }
                ]
            },
            {
                title: '요소 4: 액션/포즈',
                categories: [
                    {
                        name: '동작',
                        keywords: [
                            { en: 'standing', ko: '서 있는' },
                            { en: 'sitting', ko: '앉아 있는' },
                            { en: 'running', ko: '달리는' },
                            { en: 'jumping', ko: '점프하는' },
                            { en: 'dancing', ko: '춤추는' },
                            { en: 'fighting', ko: '싸우는' }
                        ]
                    }
                ]
            },
            {
                title: '요소 5: 환경/배경',
                categories: [
                    {
                        name: '장소',
                        keywords: [
                            { en: 'in a forest', ko: '숲 속에서' },
                            { en: 'in a city', ko: '도시에서' },
                            { en: 'on a beach', ko: '해변에서' },
                            { en: 'in a library', ko: '도서관에서' },
                            { en: 'in outer space', ko: '우주에서' }
                        ]
                    },
                    {
                        name: '날씨',
                        keywords: [
                            { en: 'sunny', ko: '맑은' },
                            { en: 'rainy', ko: '비 오는' },
                            { en: 'foggy', ko: '안개 낀' },
                            { en: 'snowy', ko: '눈 오는' }
                        ]
                    }
                ]
            },
            {
                title: '요소 6: 조명',
                categories: [
                    {
                        name: '시간대',
                        keywords: [
                            { en: 'golden hour', ko: '골든 아워' },
                            { en: 'blue hour', ko: '블루 아워' },
                            { en: 'midday sun', ko: '한낮' },
                            { en: 'night', ko: '밤' }
                        ]
                    },
                    {
                        name: '조명 스타일',
                        keywords: [
                            { en: 'dramatic lighting', ko: '극적인 조명' },
                            { en: 'soft lighting', ko: '부드러운 조명' },
                            { en: 'rim lighting', ko: '윤곽광' },
                            { en: 'neon lights', ko: '네온 조명' }
                        ]
                    }
                ]
            },
            {
                title: '요소 7: 카메라 앵글',
                categories: [
                    {
                        name: '앵글',
                        keywords: [
                            { en: 'eye-level shot', ko: '눈높이' },
                            { en: 'low-angle shot', ko: '로우 앵글' },
                            { en: 'high-angle shot', ko: '하이 앵글' },
                            { en: 'bird\'s-eye view', ko: '조감도' }
                        ]
                    },
                    {
                        name: '샷 크기',
                        keywords: [
                            { en: 'close-up', ko: '클로즈업' },
                            { en: 'medium shot', ko: '미디엄 샷' },
                            { en: 'wide shot', ko: '와이드 샷' }
                        ]
                    }
                ]
            },
            {
                title: '요소 8: 색감 및 품질',
                categories: [
                    {
                        name: '색감',
                        keywords: [
                            { en: 'warm tones', ko: '따뜻한 톤' },
                            { en: 'cool tones', ko: '차가운 톤' },
                            { en: 'vibrant colors', ko: '선명한 색상' },
                            { en: 'black and white', ko: '흑백' }
                        ]
                    },
                    {
                        name: '품질',
                        keywords: [
                            { en: '8K', ko: '8K 해상도' },
                            { en: 'ultra detailed', ko: '초고해상도' },
                            { en: 'sharp focus', ko: '선명한 초점' },
                            { en: 'bokeh', ko: '보케 효과' }
                        ]
                    }
                ]
            }
        ],
        usage: [],
        images: []
    },

    // ============= 자료실 (LIBRARY) =============
    'curriculum-beginner': {
        title: '초급과정 커리큘럼',
        koreanTitle: 'Beginner Curriculum',
        type: 'download',
        date: '2026-03-19',
        author: 'AI TOOLBEE',
        summary: 'AI 이미지/영상 생성 초급과정 강의 커리큘럼 PDF',
        fileUrl: '/files/초급과정.pdf',
        fileSize: '909 KB',
        fileType: 'PDF',
        images: [],
    },
    'curriculum-intermediate': {
        title: '중급과정 커리큘럼',
        koreanTitle: 'Intermediate Curriculum',
        type: 'download',
        date: '2026-03-19',
        author: 'AI TOOLBEE',
        summary: 'AI 이미지/영상 생성 중급과정 강의 커리큘럼 PDF',
        fileUrl: '/files/중급과정.pdf',
        fileSize: '1.8 MB',
        fileType: 'PDF',
        images: [],
    },
    'curriculum-advanced': {
        title: '고급과정 커리큘럼',
        koreanTitle: 'Advanced Curriculum',
        type: 'download',
        date: '2026-03-19',
        author: 'AI TOOLBEE',
        summary: 'AI 이미지/영상 생성 고급과정 강의 커리큘럼 PDF',
        fileUrl: '/files/고급과정.pdf',
        fileSize: '1.8 MB',
        fileType: 'PDF',
        images: [],
    },

    // ============= 프롬프트맛집 (PROMPT RESTAURANT) =============
    'prompt-recipe-1': {
        title: '프롬프트 레시피 1',
        koreanTitle: 'Prompt Recipe 1',
        type: 'blog',
        thumbnail: '',
        date: '2026-03-06',
        author: 'AI TOOLBEE',
        tags: [],
        summary: '프롬프트 레시피가 곧 업데이트 됩니다.',
        content: '<p>프롬프트 레시피가 곧 업데이트 됩니다.</p>',
        images: [
            { src: '/images/guide/restaurant/prompt-recipe-1-1.jpg', caption: 'prompt recipe 1 example 1', prompt: 'prompt recipe visual example 1, AI generated artwork demonstration, creative prompt result, high quality output, detailed' }
        ],
    },
    'prompt-recipe-2': {
        title: '프롬프트 레시피 2',
        koreanTitle: 'Prompt Recipe 2',
        type: 'blog',
        thumbnail: '',
        date: '2026-03-06',
        author: 'AI TOOLBEE',
        tags: [],
        summary: '프롬프트 레시피가 곧 업데이트 됩니다.',
        content: '<p>프롬프트 레시피가 곧 업데이트 됩니다.</p>',
        images: [
            { src: '/images/guide/restaurant/prompt-recipe-2-1.jpg', caption: 'prompt recipe 2 example 1', prompt: 'prompt recipe visual example 1, AI generated artwork demonstration, creative prompt result, high quality output, detailed' }
        ],
    },
    'prompt-recipe-3': {
        title: '프롬프트 레시피 3',
        koreanTitle: 'Prompt Recipe 3',
        type: 'blog',
        thumbnail: '',
        date: '2026-03-06',
        author: 'AI TOOLBEE',
        tags: [],
        summary: '프롬프트 레시피가 곧 업데이트 됩니다.',
        content: '<p>프롬프트 레시피가 곧 업데이트 됩니다.</p>',
        images: [
            { src: '/images/guide/restaurant/prompt-recipe-3-1.jpg', caption: 'prompt recipe 3 example 1', prompt: 'prompt recipe visual example 1, AI generated artwork demonstration, creative prompt result, high quality output, detailed' }
        ],
    },

};
