import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        createMany: {
          data: [{ title: 'Hello World' }, { title: 'Hello Moon' }]
        }
      }
    }
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true
    }
  })
  console.log(allUsers)
}

//Ejemplo para todos los usuarios
//   const users = await prisma.user.findMany({})
//   console.log(users)

//ejemplo para todos los post
//   const post = await prisma.post.findUnique({
//     where: { id: 2 }
//   })
//   console.log(post)

main()
