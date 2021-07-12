const { response } = require('express');
const User = require('../models/User');

const create = async(req,res) => {
    try{
          const user = await User.create(req.body);
          return res.status(201).json({message: "Usuário cadastrado com sucesso!", user: user});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try{
        const users = await User.findAll({
          include: [
            'following',
            'followed'
          ]
        });
        return res.status(200).json({users});
    }catch(err){
        return res.status(500).json({err});
    }
};

const follow = async(req,res) => {
    const {id} = req.params;
    try{
        const userFollowing = await User.findByPk(id);
        const userFollowed = await User.findByPk(req.body.userId);
        await userFollowing.addFollowing(userFollowed);
        return res.status(200).json(userFollowing);
    }catch(err){
        return res.status(500).json({err});
    }
};

const unfollow = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const userFollowed = await User.findByPk(req.body.userId);
        await user.removeFollowing(userFollowed);
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({err});
    }
};

const listFollowing = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const listFollowings = await user.getFollowing();
        return res.status(200).json({listFollowings});
    }catch(err){
        return res.status(500).json({err});
    }
};

const listFollowers = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const listFollowers = await user.getFollowed();
        return res.status(200).json({listFollowers});
    }catch(err){
        return res.status(500).json({err});
    }
};

module.exports = {
    create,
    index,
    follow,
    unfollow,
    listFollowing,
    listFollowers
};
