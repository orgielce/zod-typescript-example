import {z} from 'zod';


// validaciones básicas
// const nameSchema = z.string();
// const numberSchema = z.number();
// const booleanSchema = z.boolean();
// const undefinedSchema = z.undefined();
// const nullSchema = z.null();
//
// const name = 'Mark';
// const result = nameSchema.parse(name)
//
// console.log(result)


// validaciones objetos
const UserSchema = z.object({
    email: z.string().email(),
    fullName: z.string(),
    phone: z.number()
})

// type UserType = z.infer<typeof UserSchema>
// const UserInput: UserType = {
//     email: 'orgielce@gmail.com',
//     fullName: 'O',
//     phone: 3224234324
// }
//
// const user = UserSchema.parse(UserInput)
// console.log(user)


// validaciones esquemas compuestos
// const addressSchema = z.object({
//     street: z.string(),
//     city: z.string(),
// })
//
// const citizenSchema = UserSchema.merge(addressSchema)
// type CitizenType = z.infer<typeof citizenSchema>
// const citizen: CitizenType = {
//     email: 'orgielce@gmail.com',
//     fullName: 'O',
//     phone: 3224234324,
//     street: 'O Relly 123',
//     city: 'Havana'
// }
//
// const result2 = citizenSchema.parse(citizen)
// console.log(result2)



// validación segura sin acabar con la ejecución del programa
// const stringSchema = z.string();
// const result3 = stringSchema.safeParse(true)
// console.log(result3)



// validando arreglos
const Project = z.object({
    id: z.string().uuid(),
    name: z.string()
});

const User1 = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    name: z.string().nonempty(),
    githubId: z.string().optional(),
    projects: z.array(Project)
});

type User1Type = z.infer<typeof User1>

// // otros detalles trabajando con objetos
// const UserWithoutId = User1.omit({id: true})
// const PartialUser = User1.partial(); // all fields are optional
// const WithImage = z.object({image: z.string()});
// const UserWithImage = User1.merge(WithImage);
//
// const result3 = PartialUser.safeParse({
//     name: 'John',
//     email: 'example@mail.com',
//     projects: [{name: 'Zod'}]
// })
// console.log(result3)
