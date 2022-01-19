import { classes } from '../../model/ClassModel';



export class ShowAllClassesUseCases {
  async execute({page}:any) {
    //verificar se existe no Banco
    const findClass = await classes.find();
    const parsedPage = parseInt(page)
    const Pages = []
    const item = parsedPage * 50
    const diffItem = item - 50
    let i = diffItem
    

    //Verificar se existe dados
    if (findClass.length === 0) {
      return 'Not found class';
    }
    
    
    do{
      if(findClass[i] == null) {
        return Pages
      }

      Pages.push(findClass[i])
      
      i++
    } while(i < item)
    

   

    return Pages;
  }
}
