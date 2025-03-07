/* eslint-disable prettier/prettier */
// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      title: "مرحبا في",
      getStarted: "لنبدأ",
    },
    llm: {
      title: "إعدادات نموذج التعلم العميق المفضّلة",
      description:
        "يمكن لـِ  إيني ثينك إلْلْمْ العمل مع عدة موفرين لنماذج التعلم العميق لأداء خدمة المحادثات",
    },
    userSetup: {
      title: "إنشاء المستعمِل",
      description: ".ضبط إعدادات مستعمِلِك",
      howManyUsers: "كم من مستعمِل سيستعمِل هذا المثيل ؟",
      justMe: "فقط أنا",
      myTeam: "فريقي",
      instancePassword: "كلمة مرورالمثيل",
      setPassword: "هل تريد إنشاء كلمة مرور ؟",
      passwordReq: "يجب أن تحتوي كلمة المرور على ثمانية حروف على الأقل",
      passwordWarn: "من المهم حفظ كلمة المرور هذه لأنه لا يمكن استردادها.",
      adminUsername: "اسم مستعمل حساب المشرف",
      adminUsernameReq:
        "يجب أن يكون اسم المستعمل بطول 6 أحرف على الأقل وأن يحتوي فقط على أحرف صغيرة وأرقام وشرطات سفلية وواصلات بدون مسافات.",
      adminPassword: "كلمة مرور حساب المشرف",
      adminPasswordReq: "يجب أن تكون كلمات المرور 8 أحرف على الأقل.",
      teamHint:
        "بمجرد اكتمال الإنشاء  ستكون المشرف الوحيد يمكنك دعوة الآخرين ليكونوا مستعملين أو مشرفين. لا تفقد كلمة المرور الخاصة بك حيث يمكن للمشرفين فقط إعادة تعيين كلمات المرور",
    },
    data: {
      title: "معالجة البيانات والخصوصية",
      description:
        "نحن ملتزمون بالشفافية والمراقبة عندما يتعلق الأمر ببياناتك الشخصية.",
      settingsHint: "يمكن إعادة ضبط هذه الإعدادات في أي وقت.",
    },
    survey: {
      title: "مرحباً في إيني ثينك إلْلْمْ",
      description:
        " بما يتناسب مع احتياجاتك ساعدنا إذا أحببت في تصميم  إيني ثينك إلْلْمْ",
      email: "ما هو بريدك الالكتروني؟",
      useCase: "لماذا ستستخدم إيني ثينك إلْلْمْ؟",
      useCaseWork: "للعمل",
      useCasePersonal: "للاستخدام الشخصي",
      useCaseOther: "شيء آخَر",
      comment: "كيف سمعت عن إيني ثينك إلْلْمْ ؟",
      commentPlaceholder:
        "أخبرنا كيف وجدتنا!، يوتيوب، تويتر، جيثوب، ريديت وما إلى ذلك -",
      skip: "تخطي الاستطلاع",
      thankYou: "شكرا على تقييماتك!",
    },
    workspace: {
      title: "قم بإنشاء مساحة العمل الأولى الخاصة بك",
      description:
        "قم بإنشاء مساحة العمل الأولى الخاصة بك وابدأ مع إيني ثينك إلْلْمْ.",
    },
  },
  common: {
    "workspaces-name": "اسم مساحة العمل",
    error: "خطأ",
    success: "موفّق",
    user: "مستعمِل",
    selection: "اختيار النموذج",
    saving: "حفظ...",
    save: "حفظ التغييرات",
    previous: "الصفحة السابقة",
    next: "الصفحة التالية",
    optional: "اختياري",
    yes: "نعم",
    no: "لا",
    create: "قم بالإنشاء ",
  },
  settings: {
    title: "إعدادات المثيل",
    system: "الإعدادات العامة",
    invites: "دعوات",
    users: "مستعملون",
    workspaces: "مساحات العمل",
    "workspace-chats": "محادثات مساحة العمل",
    customization: "التخصيص",
    "api-keys": "API للمطورين",
    llm: "نماذج التعلم العميق",
    transcription: "النسْخ",
    embedder: "مُضمّن",
    "text-splitting": "تقسيم النص وتقطيعه",
    "voice-speech": "الصوت والخطاب",
    "vector-database": "قاعدة بيانات المتجهات",
    embeds: "تضمين المحادثة",
    "embed-chats": "سجل تضمين المحادثة",
    security: "حماية",
    "event-logs": "سجلات الأحداث",
    privacy: "الخصوصية والبيانات",
    "ai-providers": "موفرو الذكاء الاصطناعي",
    "agent-skills": "مهارات الوكيل",
    admin: "مشرف",
    tools: "أدوات",
    "experimental-features": "الميزات التجريبية",
    contact: "اتصل بالدعم",
    "browser-extension": "ملحق المتصفح",
    CommunityHub: "مركز المجتمع",
    "Explore-Trending": "استكشف المواضيع الشائعة",
    "Your-Account": "حسابك",
    "Import-Item": "استيراد العنصر",
    OpenSettings: "افتح الإعدادات",
    JoinDiscord: "انضم إلى ديسكورد الخاص بـ إيني ثينك إلْلْمْ",
    helpDocs: "افتح مستندات المساعدة الخاصة بـ إيني ثينك إلْلْمْ",
    GitHubCode: "عرض مصدر الكود على جيثب",
    HideSidebar: " إخفاء الشريط الجانبي",
    ShowSidebar: " إظهار الشريط الجانبي",
  },
  login: {
    "multi-user": {
      welcome: "مرحبا في",
      "placeholder-username": "اسم المستعمِل",
      "placeholder-password": "كلمة المرور",
      login: "تسجيل الدخول",
      validating: "جاري التحقق...",
      "forgot-pass": "هل نسيت كلمة المرور",
      reset: "إعادة الضبط",
    },
    "sign-in": {
      start: "تسجيل الدخول إلى",
      end: "حساب.",
    },
    "password-reset": {
      title: "إعادة تعيين كلمة المرور",
      description:
        "قم بإدخال المعلومات اللازمة أدناه لإعادة تعيين كلمة المرور الخاصة بك.",
      "recovery-codes": "رموز الاسترداد",
      "recovery-code": " {{index}} رمز الاسترداد",
      "back-to-login": "العودة إلى تسجيل الدخول",
    },
  },
  welcomeMessage: {
    part1:
      "مرحبًا بك في إيني ثينك إلْلْ اِمْ ، إيني ثينك إلْلْ اِمْ هي أداة ذكاء اصطناعي مفتوحة المصدر من مينْتْ بْلِكْس تعمل على تحويل أي شيء إلى روبوت محادثة مدرب يمكنك الاستعلام منه والمحادثة معه. إيني ثينك إلْلْ اِمْ هو برنامج (احضر مفاتيحك الخاصة) لذا لا توجد اشتراكات أو رسوم أو تكاليف لهذا البرنامج خارج الخدمات التي تريد استخدامها معه.",
    part2:
      "إيني ثينك إلْلْ اِمْ هي الطريقة الأسهل لوضع منتجات الذكاء الاصطناعي القوية مثل أوبن إآي و جيبيتي فور و لَنكشين و بينيكونديبي و كروماديبي وغيرها من الخدمات معًا في حزمة أنيقة لزيادة إنتاجيتك بمقدار 100 ضعف.",
    part3:
      "يمكن تشغيل  إيني ثينك إلْلْ اِمْ محليًا بالكامل على جهازك ولن تلاحظ حتى وجوده! لا حاجة إلى وحدة معالجة رسومية. التثبيت السحابي والمحلي متوفرين أيضًا.\nتزداد منظومة أدوات الذكاء الاصطناعي قوة يومًا بعد يوم. يجعل  إيني ثينك إلْلْ اِمْ استخدامه سهلاً.",
    githubIssue: "إنشاء مسألة على جيثوب",
    user1: "كيف أبدأ؟",
    part4:
      "الأمر بسيط. يتم تنظيم جميع  الحُزَم في  زُمَرٍ نطلق عليها مساحة العمل . وتتكون مساحات العمل من مجموعات من الملفات والمستندات والصور وملفات  بيديإفْ وغيرها من الملفات التي سيتم تحويلها إلى شيء يمكن  لنماذج التعلم العميق فهمه واستخدامه في المحادثة. يمكنك إضافة الملفات وإزالتها في أي وقت.",
    createWorkspace: "قم بإنشاء مساحة العمل الأولى الخاصة بك",
    user2:
      "هل هذا يشبه دروبوكس للذكاء الاصطناعي أم ماذا؟ ماذا عن المحادثة؟ إنه روبوت محادثة أليس كذلك؟",
    part5:
      "إن  إيني ثينك إلْلْمْ أكثر من مجرد  دروبوكس أكثر ذكاءً.\n\n إيني ثينك إلْلْمْ يوفر طريقتين للتحدث مع بياناتك:\n\n<i>الاستعلام:</i> ستستخرج محادثاتُك البيانات أو الاستنتاجات الموجودة في مستندات مساحة العمل الخاصة بك والتي يمكنها الوصول إليها. إن إضافة المزيد من المستندات إلى مساحة العمل تجعلها أكثر ذكاءً! \n\n<i>المحادثة:</i> تساهم مستنداتك + سجل المحادثة المستمر في نفس الوقت في إغناء نموذج التعلم العميق. إنه رائع لإضافة معلومات نصية في الوقت الفعلي أو التصحيحات وسوء الفهم الذي قد يكون لدى نموذج التعلم العميق. \n\nيمكنك التبديل بين أي من الوضعين \n<i>في منتصف المحادثة!</i>",
    user3: "ما شاء الله، هذا يبدو مذهلاً، دعني أجربه الآن!",
    part6: "استمتع!",
    starOnGitHub: "ابدأ على جيثوب",
    contact: "اتصل ب مينْت بليكْس",
  },
  "new-workspace": {
    title: "مساحة عمل جديدة",
    placeholder: "مساحتي للعمل",
  },
  "workspaces—settings": {
    general: "الإعدادات العامة",
    chat: "إعدادات المحادثة",
    vector: "قاعدة بيانات المتجهات",
    members: "أعضاء",
    agent: "تكوين الوكيل",
  },
  general: {
    vector: {
      title: "عدد المتجهات",
      description:
        "العدد الإجمالي للمتجهات في قاعدة بيانات المتجهات الخاصة بك.",
    },
    names: {
      description: "سيؤدي هذا فقط إلى تغيير اسم العرض لمساحة العمل الخاصة بك.",
    },
    message: {
      title: "رسائل المحادثة المقترحة",
      description:
        " تخصيص الرسائل التي سيتم اقتراحها لمستعملي مساحة العمل الخاصة بك.",
      add: "إضافة رسالة جديدة",
      save: "حفظ الرسائل",
      heading: "اشرح لي",
      body: "فوائد برنامج إيني ثينك إلْلْمْ",
    },
    pfp: {
      title: "صورة الملف الشخصي للمساعد",
      description: "تخصيص صورة الملف الشخصي للمساعد لمساحة العمل هذه.",
      image: "صورة مساحة العمل",
      remove: "إزالة صورة مساحة العمل",
    },
    delete: {
      title: "حذف مساحة العمل",
      description:
        "احذف مساحة العمل هذه وكل بياناتها. سيؤدي هذا إلى حذف مساحة العمل لجميع المستخدمين.",
      delete: "حذف مساحة العمل",
      deleting: "حذف مساحة العمل...",
      "confirm-start": "أنت على وشكِ حذف كامل",
      "confirm-end":
        "لمساحة العمل. سيؤدي هذا إلى إزالة جميع تضمينات المتجهات في قاعدة بيانات المتجهات الخاصة بك.\n\nستظل ملفات المصدر الأصلية دون مساس. هذا الإجراء لا رجعة فيه.",
    },
  },
  chat: {
    llm: {
      title: "موفر نموذج التعلم العميق لمساحة العمل",
      description:
        "موفر نموذج التعلم العميق المحدد والنموذج الذي سيتم استخدامه لمساحة العمل هذه. من الوهلة الأولى، يستخدم موفر نموذج التعلم العميق هذا مع إعدادات النظام.",
      search: "البحث عن كل مُوفري نماذج التعلم العميق",
    },
    model: {
      title: "نموذج محادثة مساحة العمل",
      description:
        "نموذج المحادثة المحدد الذي سيتم استخدامه لمساحة العمل هذه. إذا كان غير محدد، فسيتم استخدام نموذج التعلم العميق الافتراضي للنظام.",
      wait: "-- في انتظار النماذج --",
    },
    mode: {
      title: "وضع المحادثة",
      chat: {
        title: "المحادثة",
        "desc-start": "سيقدم إجابات حسب المعرفة العامة لنموذج التعلم العميق",
        and: "and",
        "desc-end": "المستند الذي تم العثور عليه حسب السياق.",
      },
      query: {
        title: "استعلام",
        "desc-start": "سوف تقدم الإجابات",
        only: "فقط",
        "desc-end": "إذا وجد المستند في السياق",
      },
    },
    history: {
      title: "سجل المحادثة",
      "desc-start":
        "عدد المحادثات السابقة التي سيتم تضمينها في رد الذاكرة قصيرة المدى.",
      recommend: "الموصى به 20.",
      "desc-end":
        "من المرجح أن يؤدي أي رقم أكبر من 45 إلى فشل مستمر في المحادثة اعتمادًا على حجم الرسالة.",
    },
    prompt: {
      title: "النداء",
      description:
        "النداء التي سيتم استخدامه في مساحة العمل هذه. حدد السياق والتعليمات للذكاء الاصطناعي للاستجابة. يجب عليك تقديم نداء مصمم بعناية حتى يتمكن الذكاء الاصطناعي من إنشاء استجابة دقيقة وذات صلة.",
    },
    refusal: {
      title: "الرد على رفض وضعية الاستعلام",
      "desc-start": "عندما تكون في",
      query: "استعلام",
      "desc-end":
        "وضعٍية ترغب في إرجاع رفض آخر مناسب عندما لا يتم العثور على السياق.",
    },
    temperature: {
      title: "حرارة نموذج التعلم العميق",
      "desc-start":
        'يتحكم هذا الإعداد في مدى "الإبداع" الذي ستكون عليه إجابات نموذج التعلم العميق.',
      "desc-end":
        "كلما زاد العدد كلما كان الإبداع أكبر. بالنسبة لبعض النماذج، قد يؤدي هذا إلى استجابات غير منسجمة عند ضبطها على رقم مرتفع للغاية.",
      hint: "لدى معظم نماذج التعلم العميق مجالات مقبولة مختلفة من القيم الصالحة. استشر موفر نموذج التعلم العميق الخاص بك للحصول على هذه المعلومات.",
    },
  },
  "vector-workspace": {
    identifier: "معرف قاعدة بيانات المتجهة",
    snippets: {
      title: "الحد الأقصى لمقتطفات السياق",
      description:
        "يتحكم هذا الإعداد في الحد الأقصى لعدد مقتطفات السياق التي سيتم إرسالها إلى نموذج التعلم العميق لكل محادثة أو استعلام.",
      recommend: "الموصى به: 4",
    },
    doc: {
      title: "عتبة تشابه المستند",
      description:
        "الحد الأدنى لدرجة التشابه المطلوبة لاعتبار المصدر مرتبطًا بالمحادثة. وكلما زاد الرقم، كلما كان المصدر أكثر تشابهًا بالمحادثة.",
      zero: "لا قيد",
      low: "منخفضة (درجة التشابه ≥ .25)",
      medium: "متوسطة ​​(درجة التشابه ≥ .50)",
      high: "عالية (درجة التشابه ≥ .75)",
    },
    reset: {
      reset: "إعادة تعيين قاعدة بيانات المتجهات",
      resetting: "مسح المتجهات...",
      confirm:
        "أنت على وشك إعادة تعيين قاعدة بيانات المتجهات الخاصة بمساحة العمل هذه. سيؤدي هذا إلى إزالة جميع تضمينات المتجهات المضمنة حاليًا.\n\nستظل ملفات المصدر الأصلية دون مساس. هذا الإجراء لا رجعة فيه.",
      error: "تعذرت إعادة تعيين قاعدة بيانات متجهة مساحة العمل!",
      success: "تم إعادة تعيين قاعدة بيانات متجهة مساحة العمل!",
    },
  },
  agent: {
    "performance-warning":
      "يعتمد أداء نماذج التعلم العميق التي لا تدعم صراحةً استدعاء الأدوات بشكل كبير على قدرات النموذج ودقته. قد تكون بعض القدرات محدودة أو غير وظيفية.",
    provider: {
      title: "موفر نموذج التعلم العميق لوكيل مساحة العمل",
      description:
        "موفر نموذج التعلم العميق والنموذج المحدد الذي سيتم استخدامه لوكيل الخاص بمساحة العمل هذه.",
    },
    mode: {
      chat: {
        title: "نموذج محادثة وكيل مساحة العمل",
        description:
          "نموذج المحادثة المحدد الذي سيتم استخدامه لوكيل الخاص بمساحة العمل هذه.",
      },
      title: "نموذج وكيل مساحة العمل",
      description:
        "نموذج نموذج التعلم العميق المحدد الذي سيتم استخدامه لوكيل الخاص بمساحة العمل هذه.",
      wait: "-- في انتظار النماذج --",
    },
    skill: {
      title: "مهارات الوكيل الافتراضية",
      description:
        "قم بتحسين القدرات الطبيعية للوكيل الافتراضي باستخدام هذه المهارات المعدة مسبقًا. ينطبق هذا الإعداد على جميع مساحات العمل.",
      rag: {
        title: "التوليد المعزز بالاسترجاع والذاكرة طويلة المدى",
        description:
          'اسمح للوكيل بالاستفادة من مستنداتك المحلية للإجابة على استعلام أو اطلب من الوكيل "تذكر" أجزاء من المحتوى لاسترجاعها في الذاكرة طويلة المدى.',
      },
      view: {
        title: "عرض وتلخيص المستندات",
        description:
          "السماح للوكيل بإدراج وتلخيص محتوى ملفات مساحة العمل المضمنة حاليًا.",
      },
      scrape: {
        title: "جمع محتوى المواقع الإلكترونية",
        description: "السماح للوكيل بزيارة مواقع الويب وجمع محتواها.",
      },
      generate: {
        title: "إنشاء المخططات البيانية",
        description:
          "تمكين الوكيل الافتراضي لإنشاء أنواع مختلفة من المخططات من البيانات المقدمة أو المعطاة في المحادثة.",
      },
      save: {
        title: "إنشاء الملفات وحفظها في المتصفح",
        description:
          "تمكين الوكيل الافتراضي من إنشاء الملفات والكتابة عليها وحفظها و تنزيلها في متصفحك.",
      },
      web: {
        title: "البحث والتصفح المباشر على الويب",
        "desc-start":
          "قم بتمكين الوكيل الخاص بك من البحث في الويب للإجابة على أسئلتك من خلال الاتصال بموفر البحث على الويب.",
        "desc-end":
          "لن يعمل البحث على الويب أثناء حصص المحادثة بواسطة الوكيل حتى يتم إعداد ذلك.",
      },
    },
  },
  recorded: {
    title: "محادثات مساحة العمل",
    description:
      "هذه هي جميع المحادثات والرسائل المسجلة التي أرسلها المستعملون مرتبة حسب تاريخ إنشائها.",
    export: "تصدير",
    table: {
      id: "معرف",
      by: "أرسلت بواسطة",
      workspace: "مساحة العمل",
      prompt: "نداء",
      response: "استجابة",
      at: "أرسلت في",
    },
  },
  appearance: {
    title: "مظهر",
    description: "تخصيص إعدادات مظهر منصتك.",
    logo: {
      title: "تخصيص الشعار",
      description: "قم بتحميل شعارك المخصص لجعل روبوت المحادثة خاصا بك .",
      add: "أضف شعارًا مخصصًا",
      recommended: "الحجم الموصى به: 800 × 200",
      remove: "قم بإزالة",
      replace: "قم باستبدال",
    },
    message: {
      title: "تخصيص الرسائل",
      description: "قم بتخصيص الرسائل التلقائية التي يتم عرضها لمستعمليك.",
      new: "رسالة",
      system: "للنظام",
      user: "للمستعمل",
      message: "جديدة",
      assistant: "مساعد الدردشة لِـ إني ثينك إلْلْم",
      "double-click": "انقر نقراً مزدوجاً للتحرير...",
      save: "حفظ الرسائل",
    },
    icons: {
      title: "أيقونات التذييل المخصصة",
      description: "تخصيص أيقونات التذييل المعروضة في أسفل الشريط الجانبي.",
      icon: "أيقونة",
      link: "رابط",
    },
  },
  api: {
    title: " مفاتيح API.",
    description:
      "تسمح مفاتيح API  لحامليها بالوصول إلى مثيل إني ثينك إلْلْم هذا وإدارته برمجيًا.",
    link: "اقرأ وثائق API .",
    generate: "إنشاء مفتاح API الجديد",
    table: {
      key: "مفتاح API",
      by: "تم الإنشاء بواسطة",
      created: "تم إنشاؤها",
    },
  },
  llm: {
    title: "تفضيل نموذج التعلم العميق",
    description:
      "هذه هي بيانات الاعتماد والإعدادات الخاصة بنموذج التعلم العميق للمحادثة وموفر التضمين المفضلين لديك . من المهم أن تكون هذه المفاتيح حديثة وصحيحة وإلا فلن يعمل برنامج إني ثينك إلْلْم بشكل صحيح.",
    provider: "موفر نموذج التعلم العميق",
  },
  transcription: {
    title: "تفضيل نموذج النسخ",
    description:
      "هذه هي بيانات الاعتماد والإعدادات الخاصة بموفر نموذج النسخ المفضل لديك. من المهم أن تكون هذه المفاتيح حديثة وصحيحة وإلا فلن يتم نسخ ملفات الوسائط والصوت.",
    provider: "موفر النسخ",
    "warn-start":
      "يمكن أن يؤدي استخدام نموذج الهمس المحلي على الأجهزة ذات ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية المحدودة إلى تعطيل إني ثينك إلْلْم عند معالجة ملفات الوسائط.",
    "warn-recommend":
      "نوصي بذاكرة وصول عشوائي بسعة 2 جيجابايت على الأقل وتحميل ملفات أقل من 10 ميجا بايت.",
    "warn-end": "سيتم تنزيل النموذج المدمج تلقائيًا عند الاستخدام الأول.",
  },
  embedding: {
    title: "تفضيل التضمين",
    "desc-start":
      "عند استخدام نموذج تعلم عميق لا يدعم محرك التضمين أصلاً - قد تحتاج إلى تحديد بيانات الاعتماد بالإضافة إلى ذلك لتضمين النص.",
    "desc-end":
      "التضمين هو عملية تحويل النص إلى متجهات. هذه البيانات مطلوبة لتحويل ملفاتك ومطالباتك إلى تنسيق يمكن لـ إني ثينك إلْلْمْ استخدامه للمعالجة.",
    provider: {
      title: "موفر التضمين",
      description:
        "لا يلزم إجراء أي إعداد عند استخدام محرك التضمين الأصلي الخاص بـ إني ثينك إلْلْمْ.",
    },
  },
  text: {
    title: "تقسيم النص وتفضيلات التقطيع",
    "desc-start":
      "في بعض الأحيان، قد ترغب في تغيير الطريقة الافتراضية التي يتم بها تقسيم المستندات الجديدة وتقطيعها قبل إدراجها في قاعدة بيانات المتجهة الخاصة بك.",
    "desc-end":
      "يجب عليك فقط تعديل هذا الإعداد إذا كنت تفهم كيفية عمل تقسيم النص وتأثيراته الجانبية.",
    "warn-start": "التغييرات هنا سوف تنطبق فقط على",
    "warn-center": "المستندات المضمنة حديثًا",
    "warn-end": "، وليس على المستندات الموجودة.",
    size: {
      title: "حجم قطعة النص",
      description:
        "هذا هو الحد الأقصى لطول الأحرف التي يمكن أن تكون موجودة في متجهة واحدة.",
      recommend: "الحد الأقصى لطول نموذج التضمين هو",
    },
    overlap: {
      title: "تداخل قطعة النص",
      description:
        "هذا هو الحد الأقصى لتداخل الأحرف الذي يحدث أثناء تقطيع قطعتي نص متجاورتين.",
    },
  },
  vector: {
    title: "قاعدة بيانات المتجهة",
    description:
      "هذه هي بيانات الاعتماد والإعدادات الخاصة بكيفية عمل مثيل إني ثينك إلْلْمْ الخاص بك. من المهم أن تكون هذه المفاتيح حالية وصحيحة.",
    provider: {
      title: "موفر قاعدة بيانات المتجهة",
      description: "ليست هناك حاجة تعيين إعدادات لانسديبي .",
    },
  },
  embeddable: {
    title: "أدوات المحادثة القابلة للتضمين",
    description:
      "تعتبر أدوات المحادثة القابلة للتضمين عبارة عن واجهات محادثة عامة مرتبطة بمساحة عمل واحدة. تتيح لك هذه الأدوات إنشاء مساحات عمل يمكنك بعد ذلك نشرها .",
    create: "إنشاء تضمين",
    table: {
      workspace: "مساحة العمل",
      chats: "المحادثات المرسلة",
      Active: "المجالات النشطة",
    },
  },
  "embed-chats": {
    title: "تضمين المحادثات",
    export: "تصدير",
    description:
      "هذه هي جميع المحادثات والرسائل المسجلة من أي تضمين قمت بنشره.",
    table: {
      embed: "تضمين",
      sender: "مُرسِل",
      message: "رسالة",
      response: "استجابة",
      at: "أرسلت في",
    },
  },
  multi: {
    title: "وضعية المستعملين المتعددين",
    description:
      "قم بإعداد مثيلك لدعم فريقك من خلال تنشيط وضعية المستعملين المتعددين.",
    enable: {
      "is-enable": "تم تمكين وضعية المستعملين المتعددين",
      enable: "تمكين وضعية المستعملين المتعددين",
      description:
        "افتراضيًا، ستكون أنت المشرف الوحيد. وبصفتك مشرفا ستحتاج إلى إنشاء حسابات لجميع المستعملين أو المشرفين الجدد. لا تفقد كلمة مرورك، حيث يمكن فقط للمستعمل المشرف إعادة تعيين كلمات المرور.",
      username: "اسم المستعمل لحساب المشرف",
      password: "كلمة مرور حساب المشرف",
    },
    password: {
      title: "حماية كلمة المرور",
      description:
        "إحم مثيل إني ثينك إلْلْمْ بكلمة المرور. إذا نسيتها فلا يوجد طريقة لاستردادها، فاحرص على حفظها.",
    },
    instance: {
      title: "حماية كلمة مرور المثيل",
      description:
        "افتراضيًا، ستكون أنت المشرف الوحيد. وبصفتك مشرفا، ستحتاج إلى إنشاء حسابات لجميع المستعملين أو المشرفين الجدد. لا تفقد كلمة مرورك، حيث يمكن فقط لمستعمل مشرف إعادة تعيين كلمات المرور.",
      password: "كلمة مرور المثيل",
    },
  },
  event: {
    title: "سجلات الحدث",
    description:
      "عرض كافة الإجراءات والأحداث التي تحدث في هذا المثيل للمراقبة.",
    clear: "محو سجلات الأحداث",
    table: {
      type: "نوع الحدث",
      user: "مستعمِل",
      occurred: "حدث في",
    },
  },
  privacy: {
    title: "الخصوصية ومعالجة البيانات",
    description:
      "هذا هو التكوين الخاص بك لكيفية تعامل موفري الطرف الثالث المتصلين و إني ثينك إلْلْمْ مع بياناتك.",
    llm: "اختيار نموذج التعلم العميق",
    embedding: "تفضيلات التضمين",
    vector: "قاعدة بيانات المتجهة",
    anonymous: "تم تمكين القياس المستتر عن بعد ",
  },
  connectors: {
    "search-placeholder": "البحث عن موصلات البيانات",
    "no-connectors": "لم يتم العثور على موصلات البيانات.",
    github: {
      name: "مستودع جيثب",
      description: "استيراد مستودع جيثب عام أو خاص بالكامل بنقرة واحدة.",
      URL: "رابط ريبو جيثب",
      URL_explained: "عنوان رابط لمستودع جيثب الذي ترغب في جمعه.",
      token: "رمز الوصول إلى جيثب",
      optional: "اختياري",
      token_explained: "رمز الوصول لمنع تقييد المعدل.",
      token_explained_start: "بدون",
      token_explained_link1: "رمز الوصول الشخصي",
      token_explained_middle: "قد تحدد واجهة برمجة تطبيقات جيثب عدد الملفات التي يمكن جمعها بسبب حدود المعدل. يمكنك",
      token_explained_link2: "إنشاء رمز وصول مؤقت",
      token_explained_end: "لتجنب هذه المشكلة.",
      ignores: "تجاهل الملف",
      git_ignore: "قم بإدراجها بتنسيق جيتإجنورس لتجاهل ملفات معينة أثناء التجميع. اضغط على زر الإدخال بعد كل إدخال تريد حفظه.",
      task_explained: "بمجرد اكتمال العملية، ستكون كافة الملفات متاحة للتضمين في مساحات العمل في أداة اختيار المستندات.",
      branch: "الفرع الذي ترغب في جمع الملفات منه.",
      branch_loading: "-- تحميل الفروع المتاحة --",
      branch_explained: "الفرع الذي ترغب في جمع الملفات منه.",
      token_information: "بدون ملء <b>رمز وصول جيثب</b>، لن يتمكن موصل البيانات هذا إلا من جمع ملفات <b>المستوى الأعلى</b> من المستودع بسبب حدود معدل API العامة الخاصة بـ جيثب.",
      token_personal: "احصل على رمز وصول شخصي مجاني باستخدام حساب جيثب هنا.",
    },
    gitlab: {
      name: "مستودع جيتلاب ",
      description: "استيراد مستودع جيتلاب عام أو خاص بالكامل بنقرة واحدة.",
      URL: "رابط مستودع جيتلاب",
      URL_explained: "عنوان رابط لمستودع جيتلاب الذي ترغب في جمعه.",
      token: "رمز الوصول إلى جيتلاب",
      optional: "اختياري",
      token_explained: "رمز الوصول لمنع تقييد المعدل.",
      token_description: "حدد الكيانات الإضافية لجلبها من واجهة برمجة تطبيقات جيتلاب.",
      token_explained_start: "بدون",
      token_explained_link1: "رمز الوصول الشخصي",
      token_explained_middle: "قد تحدد واجهة برمجة تطبيقات جيتلاب عدد الملفات التي يمكن جمعها بسبب حدود المعدل. يمكنك",
      token_explained_link2: "إنشاء رمز وصول مؤقت",
      token_explained_end: "لتجنب هذه المشكلة.",
      ignores: "تجاهل الملف",
      fetch_issues: "جلب المشكلات كمستندات",
      git_ignore: "قم بإدراجها بتنسيق جيتإجنورس لتجاهل ملفات معينة أثناء التجميع. اضغط على زر الإدخال بعد كل إدخال تريد حفظه.",
      task_explained: "بمجرد اكتمال العملية، ستكون كافة الملفات متاحة للتضمين في مساحات العمل في أداة اختيار المستندات.",
      branch: "الفرع الذي ترغب في جمع الملفات منه.",
      branch_loading: "-- تحميل الفروع المتاحة --",
      branch_explained: "الفرع الذي ترغب في جمع الملفات منه.",
      token_information: "بدون ملء <b>رمز وصول جيتلاب</b>، لن يتمكن موصل البيانات هذا إلا من جمع ملفات <b>المستوى الأعلى</b> من المستودع بسبب حدود معدل API العامة الخاصة بـ جيتلاب.",
      token_personal: "احصل على رمز وصول شخصي مجاني باستخدام حساب جيتلاب هنا.",
    },
    youtube: {
      name: "نص يوتيوب",
      description: "استيراد نص من مقطع فيديو يوتيوب كامل من رابط.",
      URL: "رابط فيديو اليوتيوب",
      URL_explained_start: " أدخل رابط لأي مقطع فيديو على اليوتيوب لجلب نصه. يجب أن تكون",
      URL_explained_link: "التسميات التوضيحية المغلقة",
      URL_explained_end: "متاحة.",
      task_explained: "بمجرد اكتماله، سيكون النص متاحًا للتضمين في مساحات العمل في أداة اختيار المستندات.",
      language: "لغة النص",
      language_explained: "حدد لغة النص الذي تريد جمعه.",
      loading_languages: "-- تحميل اللغات المتاحة --",
    },
    "website-depth": {
      name: "مكشطة الرابط بالجملة",
      description: "كشط موقع ويب وروابطه الفرعية إلى عمق معين.",
      URL: "عنوان الموقع",
      URL_explained: "رابط الموقع الذي تريد استخراج البيانات منه.",
      depth: "عمق الزحف",
      depth_explained: "هذا هو عدد الروابط الفرعية التي يجب على العامل أن يتبعها من العنوان الأصلي.",
      max_pages: "الحد الأقصى لعدد الصفحات",
      max_pages_explained: "الحد الأقصى لعدد الروابط التي سيتم كشطها.",
      task_explained: "بمجرد اكتمال العملية، سيكون كل المحتوى المكشوط متاحًا للتضمين في مساحات العمل في أداة اختيار المستندات.",
    },
    confluence: {
      name: "كونفليونس",
      description: "استيراد صفحة كونفليونس كاملة بنقرة واحدة.",
      deployment_type: "نوع نشر كونفليونس",
      deployment_type_explained: "حدد ما إذا كانت نسخة كونفليونس الخاصة بك مستضافة على سحابة اطلسيان أو مستضافة ذاتيًا.",
      base_url: "الرابط الأساسي لـ كونفليونس",
      base_url_explained: "هذا هو الرابط الأساسي لمساحة كونفليونس الخاصة بك.",
      space_key: "مفتاح مساحة كونفليونس",
      space_key_explained: "هذا هو مفتاح المساحات لنسخة كونفليونس التي سيتم استخدامها. يبدأ عادةً بـ ~",
      username: "اسم المستعمل  في كونفليونس",
      username_explained: "اسم المستعمل الخاص بك في كونفليونس",
      auth_type: "نوع مصادقة كونفليونس",
      auth_type_explained: "حدد نوع المصادقة الذي تريد استخدامه للوصول إلى صفحات كونفليونس الخاصة بك.",
      auth_type_username: "اسم المستعمل ورمز الوصول",
      auth_type_personal: "رمز الوصول الشخصي",
      token: "رمز الوصول إلى كونفليونس",
      token_explained_start: "يجب عليك توفير رمز وصول للمصادقة. يمكنك إنشاء رمز وصول",
      token_explained_link: "هنا",
      token_desc: "رمز الوصول للمصادقة",
      pat_token: "رمز الوصول الشخصي لـ كونفليونس",
      pat_token_explained: "رمز الوصول الشخصي الخاص بك في كونفليونس.",
      task_explained: "بمجرد اكتمال ذلك، سيكون محتوى الصفحة متاحًا للتضمين في مساحات العمل في أداة اختيار المستندات.",
    },
    manage: {
      documents: "المستندات",
      "data-connectors": "موصلات البيانات",
      "desktop-only": "لا يتوفر تعديل هذه الإعدادات إلا على جهاز سطح المكتب. يُرجى الوصول إلى هذه الصفحة على سطح المكتب للمتابعة.",
      dismiss: "رفض",
      editing: "التحرير",
    },
    directory: {
      "my-documents": "مستنداتي",
      "new-folder": "مجلد جديد",
      "search-document": "ابحث عن المستند",
      "no-documents": "لا يوجد مستندات",
      "move-workspace": "انقل إلى مساحة العمل",
      name: "اسم",
      "delete-confirmation": "هل أنت متأكد من أنك تريد حذف هذه الملفات والمجلدات؟\nسيؤدي هذا إلى إزالة الملفات من النظام وإزالتها من أي مساحات عمل موجودة تلقائيًا.\nلا يمكن التراجع عن هذا الإجراء.",
      "removing-message": "جارٍ إزالة {{count}} مستندًا و{{folderCount}} مجلدًا. يُرجى الانتظار.",
      "move-success": "تم نقل {{count}} مستند بنجاح.",
      date: "تاريخ",
      type: "نوع",
      no_docs: "لا يوجد مستندات",
      select_all: "حدد الكل",
      deselect_all: "إلغاء تحديد الكل",
      remove_selected: "إزالة المحدد",
      costs: "* تكلفة التضمين لمرة واحدة",
      save_embed: "حفظ وتضمين",
    },
    upload: {
      "processor-offline": "معالج المستندات غير متاح",
      "processor-offline-desc": "لا يمكننا تحميل ملفاتك الآن لأن معالج المستندات غير متصل بالإنترنت. يرجى المحاولة مرة أخرى لاحقًا.",
      "click-upload": "انقر للتحميل أو السحب والإفلات",
      "file-types": "يدعم ملفات النصوص، وملفات csv، وجداول البيانات، وملفات الصوت، والمزيد!",
      "or-submit-link": "أو أرسل رابطًا",
      "placeholder-link": "https://example.com",
      fetching: "جاري الجلب...",
      "fetch-website": "جلب الموقع",
      "privacy-notice": "سيتم تحميل هذه الملفات إلى معالج المستندات الذي يعمل على نسخة إيني ثينك إلْلْمْ هذه. لن يتم إرسال هذه الملفات أو مشاركتها مع طرف ثالث.",
    },
    pinning: {
      what_pinning: "ماذا يعني تثبيت المستند؟",
      pin_explained_block1: "عندما تقوم <b>بتثبيت</b> مستند في إيني ثينك إلْلْمْ فإننا سنقوم بحقن محتوى المستند بالكامل في نافذة المطالبة الخاصة بك حتى يتمكن برنامج نموذج التعلم العميق الخاص بك من فهمه بالكامل.",
      pin_explained_block2: "يعمل هذا بشكل أفضل مع <b>النماذج ذات السياق الكبير</b> أو الملفات الصغيرة التي تعتبر بالغة الأهمية لقاعدة المعرفة الخاصة بها.",
      pin_explained_block3: "إذا لم تحصل على الإجابات التي تريدها من إيني ثينك إلْلْمْ افتراضيًا، فإن التثبيت يعد طريقة رائعة للحصول على إجابات ذات جودة أعلى بنقرة واحدة.",
      accept: "حسنا، فهمت",
    },
    watching: {
      what_watching: "ماذا تفعل مشاهدة المستند؟",
      watch_explained_block1: "عندما تشاهد مستندًا في AnythingLLM، سنقوم تلقائيًا بمزامنة محتوى المستند من مصدره الأصلي على فترات منتظمة. سيؤدي هذا إلى تحديث المحتوى تلقائيًا في كل مساحة عمل يتم فيها إدارة هذا المستند.",
      watch_explained_block2: "تدعم هذه الميزة حاليًا المحتوى المتوفر عبر الإنترنت ولن تكون متاحة للمستندات التي تم تحميلها يدويًا.",
      watch_explained_block3_start: "يمكنك إدارة المستندات التي تتم مشاهدتها من",
      watch_explained_block3_link: "مدير المستندات",
      watch_explained_block3_end: " عرض المشرف.",
      accept: "حسنا، فهمت",
    },
  },
  chat_window: {
    welcome: "مرحباً بكم في مساحة عملك الجديدة.",
    get_started: "للبدء إما",
    get_started_default: "للبدء",
    upload: "تحميل مستند",
    or: "أو",
    send_chat: "أرسل محادثة.",
    send_message: "أرسل رسالة",
    attach_file: "إرفاق مستند إلى هذه المحادثة",
    slash: "عرض كافة الأوامر المتاحة للمحادثة.",
    agents: "عرض كافة الوكلاء المتاحين للمحادثة.",
    text_size: "تغيير حجم النص.",
    microphone: "تحدث بما تريد.",
    send: "إرسال رسالة فورية إلى مساحة العمل",
  },
  profile_settings: {
    edit_account: "تعديل الحساب",
    profile_picture: "صورة الملف الشخصي",
    remove_profile_picture: "إزالة صورة الملف الشخصي",
    username: "اسم المستعمل",
    username_description: "يجب أن يحتوي اسم المستعمل فقط على أحرف صغيرة وأرقام وشرطات سفلية وواصلات بدون مسافات",
    new_password: "كلمة مرور جديدة",
    passwort_description: "يجب أن تكون كلمة المرور مكونة من 8 أحرف على الأقل",
    cancel: "إلغاء",
    update_account: "تحديث الحساب",
    theme: "تفضيلات السمة",
    language: "اللغة المفضلة",
  },
};

export default TRANSLATIONS;
