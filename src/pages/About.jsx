import React from "react";
import { Form, Input, Button } from 'reactstrap';
import styled from "styled-components"; 

const Disp = styled.div`
    display: flex;
`
const MiniDiv = styled.div`
    width: 56.6rem;
    height: 500px;
`
const MiniDiv2 = styled.div`
    display: flex;
    align-items: center;
    width: 56.6rem;
    height: 500px;
`
const Name = styled.p`
    text-align: center;
    color: black;
    font-size: 1.4rem;
`
const Name2 = styled.p`
    position: relative;
    top: 1rem;
    text-align: center;
    font-size: 2.5rem;
    color: black;
`
const Register = styled.p`
    text-align: center;
    color: black;
    font-size: 3rem;
`

const Register2 = styled.p`
    text-align: center;
    color: black;
    font-size: 3rem;
`
const Img = styled.img`
    width: 490px;
    height: 490px;
`
const Erorr = styled.div`
    position: relative;
    top: 2rem;
`
const Advice = styled.ul`
`
const AdviceWord = styled.li`
    margin: 1rem;
`
const About = () => {
    const arr = [1,1,1]
    return(
        <div>
            <Disp>
                <MiniDiv>
                    <Name2>Doimiy royhatda turish uchun anketa</Name2>
                    <Erorr>
                        <Form>
                            <Name>Email</Name>
                                <Input type="email" />
                            <Name>Password</Name>
                                <Input type="password" />
                            <Name>Phone Rumber</Name>
                                <Input type="number" placeholder="+998" />
                            <Name>Adress</Name>
                                <Input />
                            <Button color="primary"  className="my-4">Malumotni yuborish</Button>
                        </Form>
                    </Erorr>
                </MiniDiv>
                <MiniDiv2>
                    <Img src="https://med24.uz/upload/iblock/0c5/0c546dc3d972eb16c196887a4bbbb9ab.png" alt="" />
                    <Register>Ezgu Niyat klinikasiga royhatdan otish uchun</Register>
                </MiniDiv2>
            </Disp>

                <Register2>Doimiy royhatdan o'tish avzaliklari</Register2>
                <Register2>Bosh shifokor maslahati</Register2>
                <Register2>Ezgu Niyat klinikasi haqida malumot</Register2>
            {arr.map((d) =>(
            <Advice>
                <AdviceWord>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam omnis neque cum laborum. Sapiente voluptatibus aliquid nesciunt quasi, veniam, quas delectus tenetur dolorum impedit id sit magnam dolorem inventore ex tempore hic distinctio consequatur pariatur vero a suscipit laudantium exercitationem eaque incidunt! Ratione labore amet, placeat eaque doloremque libero laboriosam sit blanditiis quis. Ab velit alias ut iusto, maiores omnis!
                </AdviceWord>
                <AdviceWord>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus iste, et repudiandae provident porro praesentium ipsa impedit? Harum quos esse blanditiis dolor sunt dolores deserunt aut quisquam iusto consectetur sint asperiores eaque suscipit ipsum culpa id eveniet similique quo voluptate perspiciatis, consequatur nihil. Velit distinctio voluptatem et sit alias! Quas perspiciatis quo illo aut vel similique quaerat corporis recusandae omnis neque suscipit eligendi quibusdam voluptas provident esse nulla, voluptatum cumque pariatur consequatur ipsum adipisci deserunt minima repellendus! Unde recusandae nostrum necessitatibus fuga sapiente quaerat explicabo iusto earum!
                </AdviceWord>
                <AdviceWord>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore tempore iusto officiis, est voluptates corrupti, veritatis eaque temporibus expedita exercitationem illum neque, necessitatibus ullam repudiandae autem sequi. Necessitatibus, enim accusamus dolores porro voluptatem adipisci magni soluta esse totam amet voluptas commodi? Ullam porro, eius assumenda enim alias harum tempora magni asperiores! Dolor suscipit, id iste distinctio saepe, assumenda, fugit aperiam iusto nam voluptatum unde. Fugit temporibus eligendi ullam, quas id neque similique, impedit, corrupti quasi minima recusandae? Cumque ullam ut nemo perferendis dolorum dicta similique, autem non atque, blanditiis cum molestiae maiores pariatur nam veritatis accusantium accusamus recusandae quo harum dolor asperiores laudantium obcaecati doloremque fugiat? Iure voluptatem iusto aliquam consectetur reiciendis aut sequi facilis porro dicta harum nemo aperiam eveniet dignissimos cum pariatur nihil minus eos a praesentium neque amet dolores, doloremque error soluta. Perferendis, reprehenderit! Doloribus temporibus, alias sint dolorum voluptas, sunt aspernatur dicta cumque, rerum et deleniti atque earum! Assumenda, aliquam.
                </AdviceWord>
                <AdviceWord>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore tempore iusto officiis, est voluptates corrupti, veritatis eaque temporibus expedita exercitationem illum neque, necessitatibus ullam repudiandae autem sequi. Necessitatibus, enim accusamus dolores porro voluptatem adipisci magni soluta esse totam amet voluptas commodi? Ullam porro, eius assumenda enim alias harum tempora magni asperiores! Dolor suscipit, id iste distinctio saepe, assumenda, fugit aperiam iusto nam voluptatum unde. Fugit temporibus eligendi ullam, quas id neque similique, impedit, corrupti quasi minima recusandae? Cumque ullam ut nemo perferendis dolorum dicta similique, autem non atque, blanditiis cum molestiae maiores pariatur nam veritatis accusantium accusamus recusandae quo harum dolor asperiores laudantium obcaecati doloremque fugiat? Iure voluptatem iusto aliquam consectetur reiciendis aut sequi facilis porro dicta harum nemo aperiam eveniet dignissimos cum pariatur nihil minus eos a praesentium neque amet dolores, doloremque error soluta. Perferendis, reprehenderit! Doloribus temporibus, alias sint dolorum voluptas, sunt aspernatur dicta cumque, rerum et deleniti atque earum! Assumenda, aliquam.
                </AdviceWord>
            </Advice>
            ))}
            {/* <Advice>
                <AdviceWord>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam omnis neque cum laborum. Sapiente voluptatibus aliquid nesciunt quasi, veniam, quas delectus tenetur dolorum impedit id sit magnam dolorem inventore ex tempore hic distinctio consequatur pariatur vero a suscipit laudantium exercitationem eaque incidunt! Ratione labore amet, placeat eaque doloremque libero laboriosam sit blanditiis quis. Ab velit alias ut iusto, maiores omnis!
                </AdviceWord>
                <AdviceWord>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus iste, et repudiandae provident porro praesentium ipsa impedit? Harum quos esse blanditiis dolor sunt dolores deserunt aut quisquam iusto consectetur sint asperiores eaque suscipit ipsum culpa id eveniet similique quo voluptate perspiciatis, consequatur nihil. Velit distinctio voluptatem et sit alias! Quas perspiciatis quo illo aut vel similique quaerat corporis recusandae omnis neque suscipit eligendi quibusdam voluptas provident esse nulla, voluptatum cumque pariatur consequatur ipsum adipisci deserunt minima repellendus! Unde recusandae nostrum necessitatibus fuga sapiente quaerat explicabo iusto earum!
                </AdviceWord>
                <AdviceWord>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore tempore iusto officiis, est voluptates corrupti, veritatis eaque temporibus expedita exercitationem illum neque, necessitatibus ullam repudiandae autem sequi. Necessitatibus, enim accusamus dolores porro voluptatem adipisci magni soluta esse totam amet voluptas commodi? Ullam porro, eius assumenda enim alias harum tempora magni asperiores! Dolor suscipit, id iste distinctio saepe, assumenda, fugit aperiam iusto nam voluptatum unde. Fugit temporibus eligendi ullam, quas id neque similique, impedit, corrupti quasi minima recusandae? Cumque ullam ut nemo perferendis dolorum dicta similique, autem non atque, blanditiis cum molestiae maiores pariatur nam veritatis accusantium accusamus recusandae quo harum dolor asperiores laudantium obcaecati doloremque fugiat? Iure voluptatem iusto aliquam consectetur reiciendis aut sequi facilis porro dicta harum nemo aperiam eveniet dignissimos cum pariatur nihil minus eos a praesentium neque amet dolores, doloremque error soluta. Perferendis, reprehenderit! Doloribus temporibus, alias sint dolorum voluptas, sunt aspernatur dicta cumque, rerum et deleniti atque earum! Assumenda, aliquam.
                </AdviceWord>
                <AdviceWord>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore tempore iusto officiis, est voluptates corrupti, veritatis eaque temporibus expedita exercitationem illum neque, necessitatibus ullam repudiandae autem sequi. Necessitatibus, enim accusamus dolores porro voluptatem adipisci magni soluta esse totam amet voluptas commodi? Ullam porro, eius assumenda enim alias harum tempora magni asperiores! Dolor suscipit, id iste distinctio saepe, assumenda, fugit aperiam iusto nam voluptatum unde. Fugit temporibus eligendi ullam, quas id neque similique, impedit, corrupti quasi minima recusandae? Cumque ullam ut nemo perferendis dolorum dicta similique, autem non atque, blanditiis cum molestiae maiores pariatur nam veritatis accusantium accusamus recusandae quo harum dolor asperiores laudantium obcaecati doloremque fugiat? Iure voluptatem iusto aliquam consectetur reiciendis aut sequi facilis porro dicta harum nemo aperiam eveniet dignissimos cum pariatur nihil minus eos a praesentium neque amet dolores, doloremque error soluta. Perferendis, reprehenderit! Doloribus temporibus, alias sint dolorum voluptas, sunt aspernatur dicta cumque, rerum et deleniti atque earum! Assumenda, aliquam.
                </AdviceWord>
            </Advice>

            <Advice>
                <AdviceWord>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam omnis neque cum laborum. Sapiente voluptatibus aliquid nesciunt quasi, veniam, quas delectus tenetur dolorum impedit id sit magnam dolorem inventore ex tempore hic distinctio consequatur pariatur vero a suscipit laudantium exercitationem eaque incidunt! Ratione labore amet, placeat eaque doloremque libero laboriosam sit blanditiis quis. Ab velit alias ut iusto, maiores omnis!
                </AdviceWord>
                <AdviceWord>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus iste, et repudiandae provident porro praesentium ipsa impedit? Harum quos esse blanditiis dolor sunt dolores deserunt aut quisquam iusto consectetur sint asperiores eaque suscipit ipsum culpa id eveniet similique quo voluptate perspiciatis, consequatur nihil. Velit distinctio voluptatem et sit alias! Quas perspiciatis quo illo aut vel similique quaerat corporis recusandae omnis neque suscipit eligendi quibusdam voluptas provident esse nulla, voluptatum cumque pariatur consequatur ipsum adipisci deserunt minima repellendus! Unde recusandae nostrum necessitatibus fuga sapiente quaerat explicabo iusto earum!
                </AdviceWord>
                <AdviceWord>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore tempore iusto officiis, est voluptates corrupti, veritatis eaque temporibus expedita exercitationem illum neque, necessitatibus ullam repudiandae autem sequi. Necessitatibus, enim accusamus dolores porro voluptatem adipisci magni soluta esse totam amet voluptas commodi? Ullam porro, eius assumenda enim alias harum tempora magni asperiores! Dolor suscipit, id iste distinctio saepe, assumenda, fugit aperiam iusto nam voluptatum unde. Fugit temporibus eligendi ullam, quas id neque similique, impedit, corrupti quasi minima recusandae? Cumque ullam ut nemo perferendis dolorum dicta similique, autem non atque, blanditiis cum molestiae maiores pariatur nam veritatis accusantium accusamus recusandae quo harum dolor asperiores laudantium obcaecati doloremque fugiat? Iure voluptatem iusto aliquam consectetur reiciendis aut sequi facilis porro dicta harum nemo aperiam eveniet dignissimos cum pariatur nihil minus eos a praesentium neque amet dolores, doloremque error soluta. Perferendis, reprehenderit! Doloribus temporibus, alias sint dolorum voluptas, sunt aspernatur dicta cumque, rerum et deleniti atque earum! Assumenda, aliquam.
                </AdviceWord>
                <AdviceWord>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore tempore iusto officiis, est voluptates corrupti, veritatis eaque temporibus expedita exercitationem illum neque, necessitatibus ullam repudiandae autem sequi. Necessitatibus, enim accusamus dolores porro voluptatem adipisci magni soluta esse totam amet voluptas commodi? Ullam porro, eius assumenda enim alias harum tempora magni asperiores! Dolor suscipit, id iste distinctio saepe, assumenda, fugit aperiam iusto nam voluptatum unde. Fugit temporibus eligendi ullam, quas id neque similique, impedit, corrupti quasi minima recusandae? Cumque ullam ut nemo perferendis dolorum dicta similique, autem non atque, blanditiis cum molestiae maiores pariatur nam veritatis accusantium accusamus recusandae quo harum dolor asperiores laudantium obcaecati doloremque fugiat? Iure voluptatem iusto aliquam consectetur reiciendis aut sequi facilis porro dicta harum nemo aperiam eveniet dignissimos cum pariatur nihil minus eos a praesentium neque amet dolores, doloremque error soluta. Perferendis, reprehenderit! Doloribus temporibus, alias sint dolorum voluptas, sunt aspernatur dicta cumque, rerum et deleniti atque earum! Assumenda, aliquam.
                </AdviceWord>
            </Advice> */}
        </div>
    )
}

export default About;