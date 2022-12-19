import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>페이지를 찾을 수 없습니다.</div>
    // <VStack bg="gray.100" justifyContent={'center'} minH="100vh">
    //   <Heading>페이지를 찾을 수 없습니다.</Heading>
    //   <Text>주소를 다시 확인해 주세요.</Text>
    //   <Link to="/">
    //     <Button colorScheme={'red'} variant={'link'}>
    //       홈으로 &rarr;
    //     </Button>
    //   </Link>
    // </VStack>
  );
}
