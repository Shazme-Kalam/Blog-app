import Blog from "../model/blogModel.js";
export const create = async (req, res) => {
    try {

        const blogData = new Blog(req.body);

        if (!blogData) {
            return res.status(404).json({ msg: "blogs not found" })
        }
        const savedData = await blogData.save();
        res.status(200).json(savedData)

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const getAll = async (req, res) => {
    try {

        const blogData = await Blog.find();
        if (!blogData) {
            return res.status(404).json({ msg: "blogs not found" });
        }
        res.status(200).json(blogData);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const getOne = async (req, res) => {
    try {

        const id = req.params.id;
        const blogExist = await Blog.findById(id);

        if (!blogExist) {
            return res.status(404).json({ msg: "Blog not found" });
        }
        res.status(200).json(blogExist)
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const blogExist = await Blog.findById(id);

        if (!blogExist) {
            return res.status(401).json({ msg: "Blogs not found" });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedBlog);

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const deleteBlog = async(req, res) =>{
    try {

const id = req.params.id;
const blogExist = await Blog.findById(id);

if (!blogExist) {
    return res.status(404).json({ msg: "Blogs not Exist" });
} 
await Blog.findByIdAndDelete(id);
res.status(200).json({msg: "Blog deleted Successfully"});

    } catch (error ) {
        res.status(500).json({ error: error });
    }
}