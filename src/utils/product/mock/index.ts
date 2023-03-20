import { v4 } from 'uuid'
import type { ShopProduct, ShopVendorProd, VendorProduct } from '../domain'
export const mockShopVendorProd = () => {
  const result: ShopVendorProd[] = []
  const vProds = mockVendorProds()
  const sProds = mockShopProds()
  for (let i = 0; i < vProds.length; i++) {
    const vProd = vProds[i]
    for (let j = 0; j < sProds.length; j++) {
      const sProd = sProds[j]
      if (sProd.vendorProdId === vProd.vendorProdId) {
        result.push({
          sProd: sProd,
          vProd: vProd
        })
      }
    }
  }
  return result
}

export const mockShopProds = (): ShopProduct[] => {
  const today = new Date()
  return [
    {
      createdAt: today,
      updatedAt: today,
      prodName: '숍 상품이름',
      shopProdId: v4(),
      vendorProdId: '06ef08cd-b65c-5f98-8d92-9fddc606f5a6',
      stockCnt: 15,
      description: '',
      ctgr: ['숍분류1', '숍분류2']
    },
    {
      createdAt: today,
      updatedAt: today,
      prodName: '숍 상품이름2',
      shopProdId: v4(),
      vendorProdId: '0d395ede-2235-54fd-83b9-9237157c5ec5',
      stockCnt: 30,
      description: 'abc',
      ctgr: ['분류1', '분류2']
    }
  ]
}
export const mockVendorProds = (): VendorProduct[] => {
  const today = new Date()
  return [
    {
      createdAt: today,
      updatedAt: today,
      gender: 'FEMALE',
      prodType: 'electronic',
      ctgr: ['notebook', 'RTX'],
      option: [
        {
          addedPrice: 5000,
          label: ['여성용 노트북 연노랑', '레드'],
          optId: 'female-notebook-yellow',
          stockCnt: 500
        }
      ],
      allowPending: false,
      fabric: '스판, 폴리에스테르, 면',
      vendorId: 'f10b0d6e-74c9-5d0e-acb2-18bba9f7dc34',
      vendorProdId: '06ef08cd-b65c-5f98-8d92-9fddc606f5a6',
      vendorPrice: 10000,
      vendorProdName: '미니골지(여성양말 골지삭스 무지양말 교복양말)',
      titleImgs: ['/img/no_image.png'],
      bodyImgs: ['/img/no_image.png'],
      info: '안녕하세요. 마리안삭스(Marian Socks) 입니다.\n\n<제품가격>\n상기기재된 가격은 1묶음(1죽)(같은색상 10장 기준)이며,\n낱장 주문 시 가격은 1,500원 입니다.\n\n<일반주문-매장픽업>\n 모든 주문은 당일픽업이 가능하며,\n 신상마켓,카카오톡(아이디:mariansocks)으로 주문주시면 됩니다.\n(*낱장주문은 카카오톡으로 문의하시면됩니다)\n\n<택배주문>\n모든 주문은 당일배송이 가능하며,(단, 지방은 일요일 및 공휴일 당일택배 불가)\n<지방택배> 주문 후 10:30PM까지 입금 시에 당일배송가능 \n<서울/경기택배> 주문 후 2:00AM까지 입금 시에 당일배송가능\n(택배사-로젠택배/우체국택배 선택가능)\n\n<제품정보 및 사진>\nKakaostory와 Wechat을 통해 제품사진 및 제품혼용률을 제공해 드립니다.\n카카오스토리 아이디: nabiya26\nWechat ID: marian6215b1\n\n<매장 운영-일~목요일까지,금/토 휴무>\n매장 위치: Team204빌딩 1층 24호\n매장 운영시간:8:00PM~6:00AM까지\n\n<주문 및 배송문의>\n운영시간: 1:00PM~5:00AM까지\n연락처:010-7624-6215\n카카오톡: 아이디-mariansocks',
      description: 'description',
      TBD: {
        fromWhere: 'SINSANG',
        displayFrom: true,
        linkUrl:
          'https://sinsangmarket.kr/search?catId=67&catItemId=4&catGenderId=1&modalGid=89884501',
        storeName: '팀204 1층 124호 Marian 마리안'
      },
      visible: 'GLOBAL',
      primeCost: 10000,
      minimumOrderQuantity: 1,
      maximumOrderQuantity: 100,
      soldOut: true,
      replacePriceText: '매진-2023.03.01 입고예정',
      madeBy: 'ko'
    },
    {
      createdAt: today,
      updatedAt: today,
      gender: 'FEMALE',
      ctgr: ['장갑', 'ETC'],
      allowPending: false,
      fabric: '울/모, 아크릴',
      option: [
        {
          addedPrice: 5000,
          label: ['터치 핑거홀 무지', '레드'],
          optId: 'touch-finger',
          stockCnt: 50
        }
      ],
      vendorId: '62b87f64-0a7a-5f83-8a74-a44ce007169d',
      vendorProdId: '0d395ede-2235-54fd-83b9-9237157c5ec5',
      vendorPrice: 5000,
      vendorProdName: '스마트폰 터치 핑거홀 무지 니트 장갑 겨울 크리스마스',
      titleImgs: ['/img/no_image.png'],
      bodyImgs: ['/img/no_image.png'],
      info: '*저희 모에드 장갑은 손목에 라벨이 있는 상품입니다*\n\n현재 주문 폭주중인 니트 장갑입니다!\n\n핑거홀이 있어서 장갑 끼고도 스마트폰 터치가 가능하며,\n\n포인트 줄 수 있는 색상, 무난하게 착용할 수 있는 색상 모두 있어서 판매하시기 정말 좋습니다!\n\n문의는 010-3060-2612로 전화나 문자 주시고\n\n신평화 2층 a-23호 모에드\n\n동평화 1층 다열 5-1 JE.이레\n\n두군데 가게 있으니 편하게 들려주세요~',
      description: 'description',
      TBD: {
        displayFrom: true,
        linkUrl:
          'https://sinsangmarket.kr/search?catId=67&catItemId=4&catGenderId=1&modalGid=91091989',
        storeName: '동평화 1층 다5-1호 모에드',
        fromWhere: 'SINSANG'
      },
      prodType: 'ACCESSORY',
      visible: 'GLOBAL',
      primeCost: 5000,
      minimumOrderQuantity: 1,
      maximumOrderQuantity: 100,
      soldOut: true,
      replacePriceText: '매진-2023.03.01 입고예정',
      madeBy: 'ko'
    }
  ]
}
