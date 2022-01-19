import { comments } from '../../model/CommentModel';



export class ShowCommentUseCase {
  async execute({ page }:any) {
    const parsedPage = parseInt(page)
    const Pages = []
    const item = parsedPage * 50
    const diffItem = item - 50
    let i = diffItem
    const findComment = await comments.find()
    
    if(findComment.length === 0) {
      return 'FAILED: Not create'
    }
    do{
      if(findComment[i] == null) {
        return Pages
      }
      Pages.push(findComment[i])
      
      i++
    } while(i < item)
    
    return Pages ;

  }
}
