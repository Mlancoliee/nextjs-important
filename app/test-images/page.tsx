import Image from 'next/image'
import Nav from '../component/nav'

export default function TestImagesPage() {
  return (
    <div style={{ padding: '20px' }}>
      <Nav />
      <h1>图片加载测试</h1>
      
      <h2>1. 本地图片 (Public 目录)</h2>
      <Image
        src="/profile.jpeg"
        alt="Local Image"
        width={300}
        height={300}
        style={{ border: '2px solid red' }}
      />
      <p>路径: /profile.jpeg</p>
      
      <h2>2. 远程图片 (外部 URL)</h2>
      <Image
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
        alt="Remote Image"
        width={300}
        height={300}
        style={{ border: '2px solid blue' }}
      />
      <p>路径: https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg</p>

      <h2>3. 本地图片 (unoptimized)</h2>
      <Image
        src="/profile.jpeg"
        alt="Local Image Unoptimized"
        width={300}
        height={300}
        unoptimized
        style={{ border: '2px solid green' }}
      />
      <p>路径: /profile.jpeg (with unoptimized prop)</p>
    </div>
  )
}
