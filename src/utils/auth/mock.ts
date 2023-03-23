import { type IoUser, USER_ROLE, USER_PROVIDER } from './domain'

export const genMockUsers = (): IoUser[] => {
  return [...getMockVendors(), ...getMockUncles(), ...getMockShops(), ...mockWorkers()]
}
export const getMockUncles = (): IoUser[] => {
  const today = new Date()
  return [
    {
      locale: 'ko',
      companyInfo: {
        companyPhone: '213123',
        managerPhone: 'ㅁㄴㅇㅁㄴㅇ',
        shopLink: 'ㅁㄴㅇㅁㄴㅇ',
        ceoPhone: 'ㅁㄴㅇㅁㄴㅇ',
        managerName: '13123',
        companyNo: '13123ㄴㅇㅁㄴ',
        ceoName: '12323',
        emailTax: 'inoutbox@gmail.com',
        companyCertificate: [
          'https://firebasestorage.googleapis.com/v0/b/io-box-develop.appspot.com/o/users%2FRzv2rEXjczNLNJ4tuGUjILGxgnK2%2F08785d64-09f1-40e7-be57-0858c8972097?alt=media&token=8a375475-9b8a-446f-b0e6-ee8bc964fc6a'
        ],
        locations: [
          {
            phone: '1242142',
            postalCode: '123124',
            lastName: '성필',
            county: '중구',
            code: '2611052000',
            alias: 'ㅁㄴㅇㅁㄴㅇ',
            town: '동광동',
            detailLocate: 'ㅁㄴㅇ123',
            locateType: LocateType.SHOP,
            firstName: '최',
            city: '부산광역시',
            country: 'KO'
          }
        ],
        companyName: 'ㅁㄴㅇㅁㄴㅇ'
      },
      userInfo: {
        fcmTokens: [],
        emailVerified: false,
        displayName: '하하항',
        profileImg: '',
        account: {
          accountName: '성필',
          code: '011',
          accountNumber: '1244215125125215',
          bank: '농협은행'
        },
        workerIds: [
          'PL9Nmf0T2hTO5XKgrxKLFWgje1M2',
          '3rOg9WuucHYrYpFwmrPycLspGby2',
          'uN76BhdzM9bfIRr3Pgv3WI7tCHd2',
          'JoYWe0AZkCQS374YgUB7DsTPgNa2'
        ],
        role: USER_ROLE.UNCLE,
        userId: 'Rzv2rEXjczNLNJ4tuGUjILGxgnK2',
        updatedAt: today,
        email: 'a@b.com',
        providerId: USER_PROVIDER.EMAIL,
        passed: false,
        createdAt: today,
        userName: '어드미어드민',
        sex: fk.name.sexType()
      },
      uncleInfo: {
        shipPendingAmount: 10000,
        amountBySize: { '0~4대봉': 0, '5~10대봉': 5000, '0원처리': 0 },
        shipLocates: [
          {
            amount: 3000,
            locate: {
              county: '강남구',
              town: '',
              country: '',
              city: '서울특별시',
              locateType: LocateType.ETC,
              code: '1168000000',
              alias: '강남구'
            }
          }
        ],
        amountByWeight: { '31~100kg': 5000, '1~30kg': 0, '0원처리': 0 },
        pickupLocates: [
          {
            locate: {
              lastName: '디오트',
              county: '중구',
              firstName: '디오트',
              country: 'KO',
              detailLocate: '신당동 193-2',
              postalCode: '04568',
              code: '1114061500',
              locateType: LocateType.OFFICE,
              alias: '디오트',
              phone: '11',
              city: '서울특별시',
              town: '신당동'
            },
            amount: 1000
          },
          {
            locate: {
              alias: '청평화',
              phone: '11',
              code: '1114061500',
              county: '중구',
              town: '신당동',
              firstName: '청평화',
              detailLocate: '신당동 217-91',
              country: 'KO',
              lastName: '청평화',
              postalCode: '04568',
              city: '서울특별시',
              locateType: LocateType.OFFICE
            },
            amount: 1000
          },
          {
            locate: {
              city: '서울특별시',
              country: 'KO',
              town: '신당동',
              alias: '누죤',
              code: '1114061500',
              county: '중구',
              lastName: '누죤',
              phone: '11',
              detailLocate: '신당동 200-5',
              firstName: '누죤',
              locateType: LocateType.ETC,
              postalCode: '04566'
            },
            amount: 2000
          },
          {
            locate: {
              city: '서울특별시',
              town: '신당동',
              code: '1114061500',
              locateType: LocateType.OFFICE,
              postalCode: '04569',
              firstName: 'apm',
              country: 'KO',
              phone: '11',
              alias: 'apm',
              county: '중구',
              lastName: 'apm',
              detailLocate: '신당동 198-12'
            },
            amount: 1000
          }
        ]
      },
      preferDark: true
    }
  ]
}
export const getMockVendors = (): IoUser[] => {
  const today = new Date()
  return [
    {
      locale: 'ko',
      // VENDOR
      operInfo: {
        autoOrderApprove: false,
        expectNumProdMonthly: '10~100',
        saleManageType: '',
        taxDeadlineDay: 1
      },
      preferDark: false,
      orderMemo: {
        time: 1675230258216,
        version: '2.26.4',
        blocks: [
          {
            id: 'v2KrICjouL',
            data: { text: '<b>입금처: 농협 352 0289 1838 53 (성필담당)</b>' },
            type: 'paragraph'
          },
          {
            type: 'paragraph',
            data: { text: 'kakao: inoutbox' },
            id: 'VkM-OlRfm3'
          },
          {
            type: 'paragraph',
            data: { text: 'instagram: inoutboxofficial' },
            id: 'eHXvSzEVAH'
          },
          {
            id: 'wW3US_243R',
            type: 'paragraph',
            data: { text: '혹시 남자친구 있으세요?..' }
          },
          {
            id: '88V_c49t1s',
            type: 'paragraph',
            data: { text: '낄낄 저는 게이가 아닙니다 낄낄낄 0130' }
          },
          {
            id: 'wSk_3SEOxb',
            data: { text: '상기금액은 부가세 별도 금액입니다.' },
            type: 'paragraph'
          },
          {
            id: 'rD50CduLF5',
            type: 'paragraph',
            data: { text: '계산서는 매일 5일 마감입니다.' }
          },
          {
            data: {
              text: '교환은 구입일로부터 2주 안으로  매장에 도착해야 가능하며,'
            },
            type: 'paragraph',
            id: 'ekHpNwdXsv'
          },
          {
            data: { text: '오염제품은 교환 및 반품이 어렵습니다.' },
            id: 'rzi9AHAPKX',
            type: 'paragraph'
          },
          {
            type: 'paragraph',
            data: { text: '샘플 반납은 3주 이내로 반납 부탁드립니다.' },
            id: 'N4mCyVughI'
          },
          {
            id: 'd1_ageFfvP',
            type: 'paragraph',
            data: {
              text: '데님소재는 이염우려가 있으니 흰색계열 의류는 피하고'
            }
          },
          {
            id: 'pN2iZRLDP8',
            type: 'paragraph',
            data: { text: '드라이클리닝 해주세요' }
          }
        ]
      },
      companyInfo: {
        companyCertificate: [],
        shopLink: 'www.inoutbox.com',
        ceoName: '준회대표',
        shipLocate: {
          city: '서울특별시',
          town: '신당동',
          code: '1114061500',
          locateType: LocateType.SHOP,
          alias: '디오트 테스트 11',
          detailLocate: '디오트 6층 a01',
          phone: '01077277428',
          country: 'KO',
          county: '중구',
          firstName: '도매',
          postalCode: '11',
          lastName: '테스트'
        },
        managerName: 'ㅁㄴㅇㄴㅁㅇ',
        ceoPhone: '231313123',
        companyPhone: '124124',
        locations: [
          {
            country: 'KO',
            firstName: '도매',
            city: '서울특별시',
            postalCode: '11',
            county: '중구',
            lastName: '테스트',
            town: '신당동',
            detailLocate: '디오트 6층 a01',
            phone: '01077277428',
            alias: '디오트 테스트 11',
            locateType: LocateType.SHOP,
            code: '1114061500'
          }
        ],
        emailTax: 'inoutbox@gmail.com',
        companyNo: '23124214',
        companyName: '성필사업자명',
        managerPhone: '123214'
      },
      userInfo: {
        email: 'spchoi@gmail.com',
        userId: 'hqogcoikE4Z8KAlugFSTRlT6Ge13',
        passed: false,
        userName: '성필도매',
        createdAt: today,
        updatedAt: today,
        displayName: '성필담당',
        providerId: USER_PROVIDER.EMAIL,
        account: {
          bank: '농협은행',
          code: '011',
          accountName: '성필예금주',
          accountNumber: '352424231221'
        },
        fcmTokens: [],
        role: USER_ROLE.VENDOR,
        emailVerified: false,
        sex: fk.name.sexType(),
        profileImg: ''
      }
    }
  ]
}
export const getMockShops = (): IoUser[] => {
  const today = new Date()
  return [
    {
      locale: 'ko',
      // SHOP
      operInfo: { purchaseMethod: SHIP_METHOD.UNCLE, saleAverage: '0~300' },
      shopInfo: { uncleUserIds: [] },
      preferDark: true,
      userInfo: {
        profileImg:
          'https://firebasestorage.googleapis.com/v0/b/io-box-develop.appspot.com/o/users%2FC9C0nsNhdsTZ5F5sL3eJFzCH6kw1%2F4a9efafe-e82c-480a-88ad-ce42b0c0ed81?alt=media&token=5ffddba6-3803-4bcd-988a-79a1f10ffcc3',
        userName: 'testshshop',
        emailVerified: false,
        updatedAt: today,
        userId: 'C9C0nsNhdsTZ5F5sL3eJFzCH6kw1',
        fcmTokens: [],
        account: {
          code: '011',
          accountName: '최성필',
          bank: '농협은행',
          accountNumber: '3520289183853'
        },
        role: USER_ROLE.SHOP,
        createdAt: today,
        displayName: 'testshop',
        providerId: USER_PROVIDER.EMAIL,
        passed: true,
        email: 'testshop@gmail.com',
        sex: fk.name.sexType()
      },
      companyInfo: {
        managerName: 'test',
        ceoPhone: '010112',
        managerPhone: '010112',
        companyNo: '1101100114',
        shopLink: 'ss@a.com',
        companyCertificate: [
          'https://firebasestorage.googleapis.com/v0/b/io-box-develop.appspot.com/o/users%2F3b32b95b-8073-4590-9176-d51329d48086?alt=media&token=2f56e17a-8c09-4f80-b34f-368375e62ef2'
        ],
        locations: [
          {
            alias: 'test',
            lastName: 'test',
            phone: '010112',
            city: '서울특별시',
            country: 'KO',
            firstName: 'test',
            locateType: LocateType.SHOP,
            county: '강남구',
            postalCode: '11',
            detailLocate: '111',
            town: '청담동',
            code: '1168056500'
          }
        ],
        shipLocate: {
          code: '1168056500',
          firstName: 'test',
          detailLocate: '111',
          country: 'KO',
          county: '강남구',
          alias: 'test',
          town: '청담동',
          postalCode: '11',
          phone: '010112',
          locateType: LocateType.SHOP,
          lastName: 'test',
          city: '서울특별시'
        },
        ceoName: 'test',
        companyPhone: '010112',
        emailTax: 'inoutbox@gmail.com',
        companyName: 'testshop'
      }
    }
  ]
}
export const mockWorkers = (): IoUser[] => {
  const today = new Date()
  return [
    // WORKERS
    {
      locale: 'ko',
      userInfo: {
        updatedAt: today,
        displayName: 'tt',
        role: USER_ROLE.UNCLE_WORKER,
        fcmTokens: [],
        managerId: 'Rzv2rEXjczNLNJ4tuGUjILGxgnK2',
        providerId: USER_PROVIDER.KAKAO,
        account: {
          bank: '농협은행',
          accountNumber: '11',
          accountName: '11',
          code: '011'
        },
        createdAt: today,
        emailVerified: false,
        userName: '',
        userId: '3rOg9WuucHYrYpFwmrPycLspGby2',
        email: 'tt@test.com',
        phone: '01012346578',
        passed: false,
        sex: fk.name.sexType()
      }
    },
    {
      userInfo: {
        email: 'uw0228@test.com',
        phone: '01012345678',
        fcmTokens: [],
        updatedAt: today,
        role: USER_ROLE.UNCLE_WORKER,
        emailVerified: false,
        userId: 'JoYWe0AZkCQS374YgUB7DsTPgNa2',
        passed: false,
        providerId: 'EMAIL',
        managerId: 'Rzv2rEXjczNLNJ4tuGUjILGxgnK2',
        displayName: 'uw0228',
        createdAt: today,
        account: {
          code: '011',
          accountNumber: '11',
          accountName: '1',
          bank: '농협은행'
        },
        userName: '',
        sex: fk.name.sexType()
      }
    },
    {
      userInfo: {
        userId: 'PL9Nmf0T2hTO5XKgrxKLFWgje1M2',
        passed: false,
        updatedAt: today,
        createdAt: today,
        phone: '01071840948',
        role: USER_ROLE.UNCLE_WORKER,
        emailVerified: false,
        account: {
          accountName: '최성필',
          accountNumber: '3520289183853',
          bank: 'NH'
        },
        email: 'worker@a.com',
        managerId: 'Rzv2rEXjczNLNJ4tuGUjILGxgnK2',
        userName: '',
        displayName: '최성필',
        providerId: 'KAKAO',
        fcmTokens: [],
        sex: fk.name.sexType()
      }
    },
    {
      userInfo: {
        userName: '',
        providerId: 'KAKAO',
        account: {
          accountName: '1',
          code: '011',
          bank: '농협은행',
          accountNumber: '01012346578'
        },
        userId: 'uN76BhdzM9bfIRr3Pgv3WI7tCHd2',
        passed: true,
        phone: '01012345678',
        updatedAt: today,
        managerId: 'Rzv2rEXjczNLNJ4tuGUjILGxgnK2',
        emailVerified: false,
        fcmTokens: [],
        email: 'uuw@test.com',
        displayName: 'uuw',
        createdAt: today,
        role: USER_ROLE.UNCLE_WORKER,
        sex: fk.name.sexType()
      }
    }
  ] as IoUser[]
}
